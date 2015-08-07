'use strict';
angular.module('schoolPlannerApp')
    .controller('AddEventCtrl', function ($scope, $timeout, $http, socket, Auth, $rootScope) {
        $scope.isAdmin = Auth.isAdmin;
        $scope.allEvents = [];
        $scope.saved = false;
        $scope.years = [1, 2, 3, 4];
        $scope.startHours = [8, 9, 10, 11, 12, 13, 14, 15];
        $scope.endHours = [8, 9, 10, 11, 12, 13, 14, 15];
        $scope.freqs = [1, 2];
        $scope.nooccs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        $scope.sers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        $scope.faculties = ['Electronica', 'Automatica', 'Energetica', 'Electric', 'Faima', 'Mecatronica'];
        $scope.groups = ['101', '102', '103', '121', '321', '423', '335', '1021', '425', '421B'];


        $http.get('/api/events').success(function (allEvents) {
            $scope.allEvents = allEvents;
            socket.syncUpdates('event', $scope.allEvents);
        });
        1
        $scope.shour = 8;
        $scope.ehour = 8;


        $scope.addEvent = function () {

            $scope.newEvent.start = new Date($scope.newEvent.start.setHours($scope.shour));
            $scope.newEvent.end = new Date($scope.newEvent.end.setHours($scope.ehour));

            console.log($scope.newEvent.start);
            console.log($scope.newEvent.end);


            $http.post('/api/events', {

                professor: $scope.newEvent.professor,
                start: $scope.newEvent.start,
                end: $scope.newEvent.end,
                title: $scope.newEvent.title,
                eventType: $scope.newEvent.eventType,
                year: $scope.newEvent.year,
                group: $scope.newEvent.group,
                series: $scope.newEvent.series,
                faculty: $scope.newEvent.faculty,
                freq: $scope.newEvent.freq,
                noocc: $scope.newEvent.noocc,
                description: $scope.newEvent.description

            }).success(function(event){
                $rootScope.$emit('createdEvent', event);
                $scope.closeDialog();
            });;


            $scope.newEvent.professor = "";
            $scope.newEvent.start = null;
            $scope.newEvent.end = null;
            $scope.newEvent.title = "";
            $scope.newEvent.eventType = "";
            $scope.newEvent.year = "";
            $scope.newEvent.group = "";
            $scope.newEvent.series = "";
            $scope.newEvent.faculty = "";
            $scope.newEvent.freq = "";
            $scope.newEvent.noocc = "";

            $scope.saved = true;
            $timeout(function () {
                $scope.saved = false
            }, 3000);
        };

    });