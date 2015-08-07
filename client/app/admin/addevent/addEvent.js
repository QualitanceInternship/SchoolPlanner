/**
 * Created by alexmedesan on 06/08/15.
 */
angular.module('schoolPlannerApp').directive('createEvent', function () {
    return {
        restrict:'E',
        controller: 'AddEventCtrl',
        templateUrl: 'app/admin/addevent/addevent.html'
    };
});