'use strict';

  angular.module('schoolPlannerApp')
  .controller('AddUniversityCtrl', function ($scope, $http, socket, $timeout) {
    $scope.allUniversities = [];
        $scope.allFacultiesDB=[];
        $scope.facultyArray = [];
        $scope.displayFaculties= [];
        $scope.saved=false;
        $scope.name = []
    

    $http.get('/api/universities').success(function(allUniversities) {
      $scope.allUniversities = allUniversities;
      socket.syncUpdates('universities', $scope.allUniversities);

      $http.get('/api/faculties').success(function(allFaculties) {
        $scope.allFaculties = allFaculties;
        socket.syncUpdates('faculties', $scope.allFaculties);
        console.log('allFaculties: ', allFaculties);
      });


      $http.get('/api/faculties').success(function(displayFaculties) {
        $scope.displayFaculties = displayFaculties;
        socket.syncUpdates('faculty', $scope.displayFaculties);
        console.log('displayFaculty: ', displayFaculties);
      });

    });

        $scope.appendFaculty = function(myChoice){
          var faculty=angular.copy(myChoice);

          if($scope.allFacultiesDB.length===0)
            return;
          else  $scope.facultyArray.push(faculty);

          for(var i=0; i<$scope.allFacultiesDB.length; i++){
            for(var j=0;j<$scope.faculty.length; j++){
              if($scope.allFacultiesDB[i]._id===$scope.faculty[j]){
                $scope.allFacultiesDB.splice(i,1);}
            }}

        };


        $scope.displayFaculties = function(thisFaculty){

          for(var ch in $scope.facultyArray){
            if(thisFaculty._id===ch) return;
          }
         return false;
         };

    $scope.addUniversity = function() {
      if($scope.newUniversity.name==="") return;
  
      $http.post('/api/universities', { name: $scope.newUniversity.name,
                                        description: $scope.description,
                                  		  faculties: $scope.facultyarray,
                                  		  active: true

                                     });
    
      

       $scope.saved=true;
      $timeout(function(){$scope.saved=false}, 3000);
    
    };

        $scope.$on('$destroy', function () {
          socket.unsyncUpdates('universities');
        });
    
  });


/*
'use strict';

angular.module('schoolPlannerApp')
    .controller('AddFacultyCtrl', function ($scope, $http, socket, $timeout) {
      $scope.allFaculties = [];
      $scope.displaySubjects = [];
      $scope.saved=false;
      $scope.allSubjects=[];
      $scope.choice={}
      $scope.choices=[];
      $scope.teachers=[];
      $scope.name=[];

      $http.get('/api/faculties').success(function(allFaculties) {
        $scope.allFaculties = allFaculties;
        socket.syncUpdates('faculties', $scope.allFaculties);

      });


      $http.get('/api/subjects').success(function(allSubjects) {
        $scope.allSubjects = allSubjects;
        socket.syncUpdates('subject', $scope.allSubjects);
        console.log('allSubjects: ', allSubjects);
      });

      $http.get('/api/subjects').success(function(displaySubjects) {
        $scope.displaySubjects = displaySubjects;
        socket.syncUpdates('subject', $scope.displaySubjects);
        console.log('displaySubjects: ', displaySubjects);
      });


      $scope.appendTeacher=function(name){
        $scope.name=name;
        if($scope.name.length===0) return;
        for(var i=0; i<$scope.teachers.length; i++){
          if($scope.name===$scope.teachers[i])
            return;
        }
        $scope.teachers.push($scope.name);
        $scope.name="";
      };


      $scope.appendChoice = function(myChoice){
        var choice=angular.copy(myChoice);

        if($scope.allSubjects.length===0)
          return;
        else  $scope.choices.push(choice);

        for(var i=0; i<$scope.allSubjects.length; i++){
          for(var j=0;j<$scope.choices.length; j++){
            if($scope.allSubjects[i]._id===$scope.choices[j]){
              $scope.allSubjects.splice(i,1);}
          }}

      };

      // $scope.displayChoices = function(thisSubject){

      //   for(var ch in $scope.choices){
      //     if(thisSubject._id===ch) return;
      //   }
      //  return false;
      // };

      $scope.addFaculty = function() {
        if($scope.newFaculty.name==="") return;
        console.log($scope.choices);
        $http.post('/api/faculties', { name: $scope.newFaculty.name,
          professors: $scope.teachers,
          subjects: $scope.choices,
          active: true

        });



        $scope.saved=true;
        $timeout(function(){$scope.saved=false}, 3000);

      };


      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('faculties');
      });
    });*/
