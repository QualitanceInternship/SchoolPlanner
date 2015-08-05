'use strict';

angular.module('schoolPlannerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'app/account/calendar/calendar.html',
        controller: 'CalendarCtrl'
      })
      .state('details', {
        url: '/details',
        templateUrl: 'app/details/details.html',
        controller: 'DetailsCtrl'
      })
      .state('universitati', {
        url: '/universitati',
        templateUrl: 'app/details/universitati/universitati.html',
        controller: 'UnivCtrl'
      })
      .state('telecomunicatii', {
        url: '/telecomunicatii',
        templateUrl: 'app/details/telecomunicatii/telecomunicatii.html',
        controller: 'TeleCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });