angular.module('schoolPlannerApp')
    .directive('createUniversity', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/details/universitati/addUniversity.html',
            controller: 'AddUniversityCtrl'
        };
    });