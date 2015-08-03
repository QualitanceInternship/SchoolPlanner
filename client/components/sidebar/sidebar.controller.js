'use strict';

angular.module('schoolPlannerApp')
<<<<<<< HEAD
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
=======
  .controller('SidenavCtrl', function ($scope, $location, Auth) {
    $scope.child = {};
    $scope.child.type ='toggle';

$scope.clickfn=function(){
	var x = 2;
}
$scope.toggle=function(){
	$scope.toggled = true;
}
  });

  
>>>>>>> 6f124db68509cf64c07286c8b85052ed11c30722
