angular.module('schoolPlannerApp')
    .factory('calendarFactory', function ($q, $http) {
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
        }
      };
    });