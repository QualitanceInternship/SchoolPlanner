'use strict';

  angular.module('schoolPlannerApp')
  .controller('AddUniversityCtrl', function ($scope, $http, socket, $rootScope) {
	$scope.allUniversities = [];
        $scope.displayFaculties = [];
        $scope.saved=false;
        $scope.allFaculties=[];
        $scope.facultyChoice={}
        $scope.facultyChoices=[];
        $scope.description=[];
        $scope.name=[];

      $http.get('/api/universities').success(function(allUniversities) {
        $scope.allUniversities = allUniversities;
        socket.syncUpdates('universities', $scope.allUniversities);
      });


      $http.get('/api/faculties').success(function(allFaculties) {
        $scope.allFaculties = allFaculties;
        socket.syncUpdates('faculty', $scope.allFaculties);
        console.log('allFaculties: ', allFaculties);
      });

      $http.get('/api/faculties').success(function(displayFaculties) {
        $scope.displayFaculties = displayFaculties;
        socket.syncUpdates('faculty', $scope.displayFaculties);
        console.log('displayFaculties: ', displayFaculties);
      });

	$scope.appendChoice = function(myChoice) {
        var choice=angular.copy(myChoice);

        if($scope.allFaculties.length===0)
          return;
        else  $scope.facultyChoices.push(choice);

        for(var i=0; i<$scope.allFaculties.length; i++){
          for(var j=0;j<$scope.facultyChoices.length; j++){
            if($scope.allFaculties[i]._id===$scope.facultyChoices[j]){
              $scope.allFaculties.splice(i,1);}
          }}

      };

      $scope.addUniversity = function() {
          if ($scope.newUniversity.name === "") return;
          console.log($scope.facultyChoices);
          $http.post('/api/universities', {
              name: $scope.newUniversity.name,
              description: $scope.description,
              faculties: $scope.facultyChoices
          }).success(function(university){
              $rootScope.$emit('createdUniversity', university);
              $scope.closeDialog();
          });
      }


      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('universities');
      });
});

