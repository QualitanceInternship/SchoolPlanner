angular.module('schoolPlannerApp')

 .controller('FacultyCtrl', function($scope, $location) {
  $scope.imagePath = '/assets/images/images.jpg';
  $scope.goTo =  function(path) {

  	$location.path(path);
  }
});