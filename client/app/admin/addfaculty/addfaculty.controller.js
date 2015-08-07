'use strict';

angular.module('schoolPlannerApp')
    .controller('AddFacultyCtrl', function ($scope, $http, socket, $timeout, $rootScope) {
        $scope.allFaculties = [];
        $scope.displaySubjects = [];
        $scope.saved = false;
        $scope.allSubjects = [];
        $scope.choice = {}
        $scope.choices = [];
        $scope.teachers = [];
        $scope.facultyname = "";
        $scope.name = [];
        $scope.getFaculties = getFaculties;
        $scope.getFaculties();

        function getFaculties() {
            $http.get('/api/faculties').success(function (allFaculties) {
                $scope.allFaculties = allFaculties;
                console.log('am luat facultatile: ', $scope.allFaculties);
                socket.syncUpdates('faculties', $scope.allFaculties);
            });
        }

        $http.get('/api/subjects').success(function (allSubjects) {
            $scope.allSubjects = allSubjects;
            socket.syncUpdates('subject', $scope.allSubjects);
            console.log('allSubjects: ', allSubjects);
        });

        $http.get('/api/subjects').success(function (displaySubjects) {
            $scope.displaySubjects = displaySubjects;
            socket.syncUpdates('subject', $scope.displaySubjects);
            console.log('displaySubjects: ', displaySubjects);
        });

        $scope.appendTeacher = function (name) {
            $scope.name = name;
            if ($scope.name.length === 0) return;
            for (var i = 0; i < $scope.teachers.length; i++) {
                if ($scope.name === $scope.teachers[i])
                    return;
            }
            $scope.teachers.push($scope.name);
            $scope.name = "";
        };

        $scope.appendChoice = function (myChoice) {
            var choice = angular.copy(myChoice);

            if ($scope.allSubjects.length === 0)
                return;
            else  $scope.choices.push(choice);

            for (var i = 0; i < $scope.allSubjects.length; i++) {
                for (var j = 0; j < $scope.choices.length; j++) {
                    if ($scope.allSubjects[i]._id === $scope.choices[j]) {
                        $scope.allSubjects.splice(i, 1);
                    }
                }
            }
        };


        $scope.addFaculty = function () {
            if ($scope.facultyname === "") return;
            console.log($scope.choices);

            $http.post('/api/faculties', {
                name: $scope.facultyname,
                professors: $scope.teachers,
                subjects: $scope.choices,
                active: true
            }).success(function(faculty){
                console.log('recireved ',faculty);
                $rootScope.$emit('createdFaculty', faculty);
            });

            $scope.closeDialog();
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('faculties');
        });
    });