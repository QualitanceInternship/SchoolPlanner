

angular.module('schoolPlannerApp').directive('createButton', function () {
   return {
   	   restrict:"E", 	
       template: '<div layout= "row" <span flex> </span> <md-button style = "position:absolute;right:50px; top:0px"   '+
      '  class="md-fab md-warn md-hue-2 newJob" aria-label="Profile" '+
      ' ng-show="isLoggedIn()" ng-click="showModal($event)">'+

       '<md-tooltip>Add new event</md-tooltip>'+
      ' +'+
   '</md-button></div>'
   };
});



/*<span flex></span><md-button style = "right:100px"*/