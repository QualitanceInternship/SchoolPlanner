'use strict';

angular.module('schoolPlannerApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $mdSidenav) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.toggleList = toggleUsersList;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    function toggleUsersList() {
        $mdSidenav('left').toggle();
    }

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });