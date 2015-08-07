'use strict'

angular.module('schoolPlannerApp')

    .controller('UnivCtrl', function ($scope, $http, $location, UnivFactory, createModal) {
        $scope.imagePath = '/assets/images/images.jpg';
        $scope.goTo = function (path) {
            $location.path(path);

        }
        $scope.createNew = function() {
            createModal.showModal(null, event, null, $scope, 'university');
        }
        $scope.university = [];

        $http.get('/api/universities').success(function (university) {
            $scope.university = university;

        });

    });
