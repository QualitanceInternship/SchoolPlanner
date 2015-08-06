'use strict'

angular.module('schoolPlannerApp')

 .controller('UnivCtrl', function($scope, $location) {
  $scope.imagePath = '/assets/images/images.jpg';
  $scope.goTo = function(path) {
    $location.path(path);
  }
});
