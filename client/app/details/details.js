'use strict';

angular.module('schoolPlannerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('details', {
                url: '/details',
                templateUrl: 'app/details/details.html',
                controller: 'DetailsCtrl'
            })
            .state('universities', {
                url: '/universities',
                templateUrl: 'app/details/universitati/universitati.html',
                controller: 'UnivCtrl'
            })
            .state('faculties', {
                url: '/faculties',
                templateUrl: 'app/details/faculties/faculty.html',
                controller: 'FacultyCtrl'
            })
            .state('addUniversity', {
                url: '/addUniversity',
                templateUrl: 'app/details/universitati/addUniversity.html',
                controller: 'AddUniversityCtrl'
            })
    });