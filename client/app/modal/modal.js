
angular.module('schoolPlannerApp')
    .factory('createModal', function($mdDialog) {

        var views={
            calendar: 'app/modal/dialog.html'
        }

        return {
            showModal: function showDialog(date, jsEvent, view, $scope, viewType) {
                console.log(date, jsEvent, view, $scope);
                var parentEl = angular.element(document.body);
                $mdDialog.show({
                    parent: parentEl,
                    targetEvent: jsEvent,
                    templateUrl: views[viewType],
                    locals: {
                        items: date
                    },
                    controller: DialogController
                });
                function DialogController($scope, $mdDialog, items) {
                    $scope.items = {
                        title: items.title,
                        professor: items.professor,
                        eventType: items.eventType,
                        year: items.year,
                        series: items.series,
                        faculty: items.faculty,
                        group: items.group,
                        start: items.start,
                        end: items.end,
                        sala: items.sala,
                        description: items.description
                    };

                    console.log(items);
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            }
        };
    });