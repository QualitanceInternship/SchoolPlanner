// angular.module('schoolPlannerApp')

// .controller('UnivCtrl', function($scope, $location) {
//  $scope.imagePath = '/assets/images/images.jpg';
//  $scope.goTo = function(path) {
//    $location.path(path);
//  }
// });



'use strict'

angular.module('schoolPlannerApp')

 .controller('UnivCtrl', function($scope,$http, $location, UnivFactory) {
  $scope.imagePath = '/assets/images/images.jpg';
  $scope.goTo = function(path) {
    $location.path(path);

  }
  		$scope.university = [];
        // CardsFactory.getMongoStuff()
        //         .then(function(faculty) {
        //             $scope.faculty = faculty;
        //         }),
        //         function(error) {
        //             console.error(error);
        //         }

        $http.get('/api/universities').success(function(university) {
      	$scope.university = university;
      
    });

});
