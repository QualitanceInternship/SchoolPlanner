angular.module('schoolPlannerApp')

    .controller('CalendarCtrl',
    function ($scope, $compile, $timeout, uiCalendarConfig, calendarFactory, $mdDialog, Auth, createModal, $rootScope) {
        $scope.events = [];

        $scope.newEvents = [];
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        $scope.createNew = function(event) {
            createModal.showModal(null, event, null, $scope, 'event');

        }
        $rootScope.$on('createdEvent', function(event) {
            getMyEventsFormated();
        });

        function getMyEventsFormated() {
            calendarFactory.getMyEvents()
                .then(function (events) {
                    $scope.events = events;

                    console.log("Auth.getCurrentUser: ", Auth.getCurrentUser());
                    console.log("events: ", events);

                    for(j=0; j<$scope.events.length; j++){
                        arraynou($scope.events[j]);
                    }
                    $timeout(function() {
                        $scope.eventSources[0] = $scope.newEvents;
                        console.log('Formated Events: ', $scope.eventSources[0]);
                    }, 300);

                }, function (error) {
                    console.error(error);
                });
        }
        getMyEventsFormated();

        function arraynou(eventt) {
            for (i = 0; i < eventt.noocc; i++) {
                var newEv = angular.copy(eventt);

                var sdate = new Date(eventt.start);

                var sd = sdate.getDate();
                var sm = sdate.getMonth();
                var sy = sdate.getFullYear();
                var sh = sdate.getHours();
                var smn = sdate.getMinutes();

                var edate = new Date(eventt.end);
                var ed = edate.getDate();
                var em = edate.getMonth();
                var ey = edate.getFullYear();
                var eh = edate.getHours();
                var emn = edate.getMinutes();


                newEv.start = new Date(sy, sm, sd + eventt.freq * i * 7, sh, smn);
                newEv.end = new Date(ey, em, ed + eventt.freq * i * 7, eh, emn);

                $scope.newEvents.push(newEv);
            }
        }

        $scope.changeTo = 'Hungarian';
        /* event source that pulls from google.com */
        $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
        };
        /* event source that contains custom events on the scope */
        // $scope.events = calendarFactory.getEvents();
        /* event source that calls a function on every view switch */
        $scope.eventsF = function (start, end, timezone, callback) {
            var s = new Date(start).getTime() / 1000;
            var e = new Date(end).getTime() / 1000;
            var m = new Date(start).getMonth();
            var events = [{
                title: 'Feed Me ' + m,
                start: s + (50000),
                end: s + (100000),
                allDay: false,
                className: ['customFeed']
            }];
            callback(events);
        };

        $scope.calEventsExt = {
            color: '#f00',
            textColor: 'yellow',
            events: [
                {
                    type: 'party',
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    type: 'party',
                    title: 'Lunch 2',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    type: 'party',
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
            ]
        };

        function showDialog(date, jsEvent, view) {
            createModal.showModal(date, jsEvent, view, $scope, 'calendar');
        }

        $scope.alertOnEventClick = showDialog;

        /* alert on Drop */
        $scope.alertOnDrop = function (event, delta, revertFunc, jsEvent, ui, view) {
            $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
        };
        /* alert on Resize */
        $scope.alertOnResize = function (event, delta, revertFunc, jsEvent, ui, view) {
            $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
        };
        /* add and removes an event source of choice */
        $scope.addRemoveEventSource = function (sources, source) {
            var canAdd = 0;
            angular.forEach(sources, function (value, key) {
                if (sources[key] === source) {
                    sources.splice(key, 1);
                    canAdd = 1;
                }
            });
            if (canAdd === 0) {
                sources.push(source);
            }
        };
        /* add custom event*/
        $scope.addEvent = function () {
            $scope.events.push({
                title: 'Open Sesame',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                className: ['openSesame']
            });
        };
        /* remove event */
        $scope.remove = function (index) {
            $scope.events.splice(index, 1);
        };
        /* Change View */
        $scope.changeView = function (view, calendar) {
            uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
        };
        /* Change View */
        $scope.renderCalender = function (calendar) {
            $timeout(function () {
                if (uiCalendarConfig.calendars[calendar]) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('render');
                }
            });
        };
        // Render Tooltip */
        $scope.eventRender = function (event, element, view) {
            element.attr({
                'tooltip': event.title,
                'tooltip-append-to-body': true
            });
            $compile(element)($scope);
        };


        /* config object */
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'title',
                    center: '',
                    right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                eventRender: $scope.eventRender
            }
        };

        $scope.changeLang = function () {
            if ($scope.changeTo === 'Hungarian') {
                $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
                $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
                $scope.changeTo = 'English';
            } else {
                $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                $scope.changeTo = 'Hungarian';
            }
        };
        /* event sources array*/
        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
        $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
    });
