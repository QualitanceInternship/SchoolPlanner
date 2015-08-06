
'use strict';

  angular.module('schoolPlannerApp')
  .controller('AddUniversityCtrl', function ($scope, $http, socket, $timeout) {
    $scope.allUniversities = [];
    
    $scope.saved=false;
    

    $http.get('/api/universities').success(function(allUniversities) {
      $scope.allUniversities = allUniversities;
      socket.syncUpdates('universities', $scope.allUniversities);

    });
    


    $scope.addUniversity = function() {
    
  
      $http.post('/api/universities', { name: $scope.newUniversity.name,
      								                  description: $scope.newUniversity.description,
                                  		  faculties: $scope.newUniversity.faculty,
                                  		  active: true

                                     });
    
      

       $scope.saved=true;
      $timeout(function(){$scope.saved=false}, 3000);
    
    };


    
  });