'use strict';

angular.module('schoolPlannerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
       url: '/admin',
       templateUrl: 'app/admin/admin.html',
       controller: 'AdminCtrl'
      })

      .state('addsubject', {
        url: '/addsubject',
        templateUrl: 'app/admin/addsubject/addsubject.html',
        controller: 'AddSubjectCtrl'
      })

      .state('listSubjects', {
        url: '/listSubjects',
        templateUrl: 'app/admin/listSubjects/listSubjects.html',
        controller: 'ListSubjCtrl'
      })

    .state('addfaculty', {
        url: '/addfaculty',
        templateUrl: 'app/admin/addfaculty/addfaculty.html',
        controller: 'AddFacultyCtrl'
      })

    .state('addevent', {
        url: '/addevent',
        templateUrl: 'app/admin/addevent/addevent.html',
        controller: 'AddEventCtrl'
      })

  });