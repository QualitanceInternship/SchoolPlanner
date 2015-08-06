/**
 * Created by alexmedesan on 06/08/15.
 */
angular.module('schoolPlannerApp').directive('createEvent', function () {
    return {
        restrict:'E',
        controller: 'AddSubjectCtrl',
        templateUrl: 'app/admin/addevent/addevent.html'
    };
});