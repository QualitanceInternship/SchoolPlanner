angular.module('schoolPlannerApp')

 .controller('TeleCtrl', function($scope, $location) {
  $scope.imagePath = '/assets/images/images.jpg';
  $scope.goTo =  function(path) {

  	$location.path(path);
  }
});