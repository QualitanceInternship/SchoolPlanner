
angular.module('schoolPlannerApp')
    .factory('createModal', function($mdDialog) {

        return {
            showModal: function showDialog(date, jsEvent, view, $scope, viewType) {
                console.log(viewType);
                var parentEl = angular.element(document.body);
                $mdDialog.show({
                    parent: parentEl,
                    targetEvent: jsEvent,
                    templateUrl: 'app/modal/dialog.html',
                    locals: {
                        items: date
                    },
                    controller: DialogController
                });
                function DialogController($scope, $mdDialog, items) {

                    $scope.show = function (elem)  {
                        console.log(elem, ' ', viewType);

                        return elem === viewType;
                    };
                    $scope.items = angular.copy(items);
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            }
        };
    })
    .directive('calendarEvent', function () {
        return {
            restrict:'E',
            templateUrl: 'app/modal/modal.html'
        };
    })
;