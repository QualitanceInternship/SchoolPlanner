/**
 * Created by alexmedesan on 06/08/15.
 */
angular.module('schoolPlannerApp').directive('createSubject', function () {
    return {
        restrict:'E',
        controller: 'AddSubjectCtrl',
        templateUrl: 'app/admin/addsubject/addSubject.html'
    };
});