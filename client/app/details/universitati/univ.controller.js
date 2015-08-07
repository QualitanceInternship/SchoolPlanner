'use strict'

angular.module('schoolPlannerApp')

    .controller('UnivCtrl', function ($scope, $http, $location, UnivFactory, createModal, $rootScope) {
        $scope.imagePath = '/assets/images/images.jpg';
        $scope.goTo = function (path) {
            $location.path(path);

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
