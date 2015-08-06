'use strict'

angular.module('schoolPlannerApp')

 .controller('FacultyCtrl', function($scope,$http, $location, CardsFactory) {
  $scope.imagePath = '/assets/images/images.jpg';
  $scope.goTo = function(path) {
    $location.path(path);

  }
  		$scope.faculty = [];
        // CardsFactory.getMongoStuff()
        //         .then(function(faculty) {
        //             $scope.faculty = faculty;
        //         }),
        //         function(error) {
        //             console.error(error);
        //         }

        $http.get('/api/faculties').success(function(faculty) {
      	$scope.faculty = faculty;
      
    });

});
