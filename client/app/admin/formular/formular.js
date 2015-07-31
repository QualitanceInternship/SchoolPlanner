angular
  .module('schoolPlannerApp')
  .controller('FormCtrl', function($scope) {
    $scope.subject = {
     

    };
  })
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });