'use strict'

angular.module('schoolPlannerApp')

    .controller('UnivCtrl', function ($scope, $http, $location, UnivFactory, createModal, $rootScope, $state) {
        $scope.imagePath = '/assets/images/specifiers.jpg';
        $scope.goTo = function (path) {
            $location.path(path);
        }
        $scope.goToDetails = function (index) {
            $rootScope.detailItem = $scope.universities[index];
            $rootScope.image = 'assets/images/background.jpg';
            $state.go('details');
        }

        $scope.createNew = function() {
            createModal.showModal(null, event, null, $scope, 'university');
        }
        $scope.universities = [];

        $http.get('/api/universities').success(function (universities) {
            $scope.universities = universities;
        });
        $rootScope.$on('createdUniversity', function(event, newUniversity) {
            $scope.universities.push(newUniversity);
        });
    });
