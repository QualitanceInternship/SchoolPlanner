'use strict';

angular.module('schoolPlannerApp')
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

  