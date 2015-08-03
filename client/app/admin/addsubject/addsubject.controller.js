

'use strict';

  angular.module('schoolPlannerApp')
  .controller('AddSubjectCtrl', function ($scope, $http, socket) {
    $scope.allSubjects = [];
    $scope.saved=false;

    $http.get('/api/subjects').success(function(allSubjects) {
      $scope.allSubjects = allSubjects;
      // socket.syncUpdates('subject', $scope.allSubjects);
      console.log('allSubjects: ', allSubjects);
    });


    $scope.addSubject = function() {

      if($scope.newSubject.name === '') {
       return;
      }
      if($scope.newSubject.faculty === '') {
       return;
      }
      if($scope.newSubject.year === '') {
       return;
      }
      if($scope.newSubject.serie === '') {
       return;
      }
       if($scope.newSubject.teacher === '') {
       return;
      }
     
      $http.post('/api/subjects', { name: $scope.newSubject.name,
      								            faculty: $scope.newSubject.faculty,
                                  year: $scope.newSubject.year,
                                  serie: $scope.newSubject.serie,
                                  teacher: $scope.newSubject.teacher

                                     });
      $scope.newSubject.name = '';
      $scope.newSubject.faculty = '';
      $scope.newSubject.year = '';
      $scope.newSubject.serie = '';
      $scope.newSubject.teacher = '';
      $scope.saved=true;
      
      

      
    
    };

    $scope.deleteSubject = function(subject) {
      $http.delete('/api/subjects/' + subject._id);
    };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('subject');
    // });
  });