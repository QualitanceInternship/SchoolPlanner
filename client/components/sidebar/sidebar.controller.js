'use strict';

angular.module('schoolPlannerApp')
  .controller('SidebarCtrl', function ($scope, $location, Auth, $mdSidenav) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;


    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };
      function toggleUsersList()
      {
          $mdSidenav('left').toggle();
      }

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });