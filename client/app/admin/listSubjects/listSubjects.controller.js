'use strict';

angular.module('schoolPlannerApp')
    .controller('ListSubjCtrl', function ($scope, $http, socket, $location, createModal, $rootScope, $state) {

        $scope.allSubjects = [];

        $http.get('/api/subjects').success(function (allSubjects) {
            $scope.allSubjects = allSubjects;
            socket.syncUpdates('subject', $scope.allSubjects);
        });

        $scope.deleteSubject = function (subject) {
            $http.delete('/api/subjects/' + subject._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('subject');
        });

        $scope.goTo = function (path) {
            $location.path(path);
        }

        $scope.goToDetails = function (index) {
            $rootScope.detailItem = $scope.allSubjects[index];
            $rootScope.image = 'assets/images/specifiers.jpg';
            $state.go('details');
        }
        $scope.createNew = function(event) {
            createModal.showModal($scope.allSubjects, event, null, $scope, 'subject');
        }
    });
