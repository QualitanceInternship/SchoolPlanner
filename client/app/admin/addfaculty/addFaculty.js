angular.module('schoolPlannerApp')

    .directive('createFaculty', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/admin/addfaculty/addfaculty.html',
            controller: 'AddFacultyCtrl'
        };
    });