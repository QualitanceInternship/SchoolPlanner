angular.module('schoolPlannerApp')
  .factory('calendarFactory', function ($q, $http, Auth) {
    return {
      getEvents: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('/api/events');
 
        httpPromise.success(function (components) {
          var date = new Date()
          var d = date.getDate();
          var m = date.getMonth();
          var y = date.getFullYear();
          deferred.resolve(components);
        })
          .error(function (error) {
            console.error('Error: ' + error);
          });
        return deferred.promise;
      },
      getMyEvents: function (){


        var deferred = $q.defer(),
          httpPromise = $http.get('/api/events/usergroup/'+ Auth.getCurrentUser().group);
 
        httpPromise.success(function (components) {
          var date = new Date()
          var d = date.getDate();
          var m = date.getMonth();
          var y = date.getFullYear();
          deferred.resolve(components);
        })
          .error(function (error) {
            console.error('Error: ' + error);
          });
        return deferred.promise;

      }
    };
  });