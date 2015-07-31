'use strict';

angular.module('schoolPlannerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })

      .state('formular', {
        url: '/formular',
        templateUrl: 'app/admin/formular/formular.html',
        controller: 'FormCtrl'
      })

  });