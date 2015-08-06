angular.module('schoolPlannerApp')

  .directive('createFaculty', function () {
  	 return {
       restrict:'E',
       templateUrl: 'app/details/faculties/addFaculty.html'
   };
});