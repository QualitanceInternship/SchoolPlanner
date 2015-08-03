'use strict';

angular.module('schoolPlannerApp')
  .controller('ListSubjCtrl', function ($scope, $http, socket) {
    $scope.allSubjects = [];

    $http.get('/api/subjects').success(function(allSubjects) {
      $scope.allSubjects = allSubjects;
      socket.syncUpdates('subject', $scope.allSubjects);
    });

    $scope.deleteSubject = function(subject) {
      $http.delete('/api/subjects/' + subject._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('subject');
    });
  });
