angular.module('schoolPlannerApp')
  .factory("CardsFactory", function($q, $http) {

        return {
            getMongoStuff: function() {
                var deferred = $q.defer(),
                    httpPromise = $http.get('/api/faculties/');

                httpPromise.success(function(faculty) {
                        deferred.resolve(faculty);
                    })
                    .error(function(error) {
                        console.error("Error: " + error);
                    });
                return deferred.promise
            }
        };
    });