'use strict';

angular.module('schoolPlannerApp')
  .config(function ($stateProvider) {
    $stateProvider
      //.state('admin', {
      //  url: '/admin',
      //  templateUrl: 'app/admin/admin.html',
      //  controller: 'AdminCtrl'
      //})
      .state('addsubject', {
        url: '/addsubject',
        templateUrl: 'app/admin/addsubject/addSubject.html',
        controller: 'AddSubjectCtrl'
      })
      .state('listSubjects', {
        url: '/listSubjects',
        templateUrl: 'app/admin/listSubjects/listSubjects.html',
        controller: 'ListSubjCtrl'
      });

  });