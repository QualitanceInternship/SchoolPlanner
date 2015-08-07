'use strict'

angular.module('schoolPlannerApp')

    .controller('FacultyCtrl', function ($scope, $http, $location, CardsFactory, createModal, $rootScope, $state) {
        $scope.imagePath = '/assets/images/images.jpg';
        $scope.goTo = function (path) {
            $location.path(path);

        }
        $scope.faculties = [];

        $rootScope.$on('createdFaculty', function(event, newFaculty) {
            console.log('createdFaculty: ', newFaculty);
            $scope.faculties.push(newFaculty);
        });

        $scope.goToDetails = function (index) {
            $rootScope.detailItem = $scope.faculties[index];
            $rootScope.image = 'assets/images/manufacturer.jpg';
            $state.go('details');
        }
        $scope.createNew = function (event) {
            createModal.showModal(null, event, null, $scope, 'faculty');
        }

        function getFaculties() {
            $http.get('/api/faculties').success(function (faculties) {
                $scope.faculties = faculties;
            });
        }
        getFaculties();

    });
