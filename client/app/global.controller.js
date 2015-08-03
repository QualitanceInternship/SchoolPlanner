'use strict';

angular.module('schoolPlannerApp')
  .controller('GlobalCtrl', function ($scope, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
