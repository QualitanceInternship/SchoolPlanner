// angular.module('schoolPlannerApp')
//   .factory("CardsFactory", function($q, $http) {

//         return {
//             getMongoStuff: function() {
//                 var deferred = $q.defer(),
//                     httpPromise = $http.get('/api/faculties/' + '55c31244a41bffd7156cfa6a');

//                 httpPromise.success(function(faculty) {
//                         deferred.resolve(faculty);
//                     })
//                     .error(function(error) {
//                         console.error("Error: " + error);
//                     });
//                 return deferred.promise
//             }
//         };
//     });


angular.module('schoolPlannerApp')
  .factory("UnivFactory", function($q, $http) {

        return {
            getMongoStuff: function() {
                var deferred = $q.defer(),
                    httpPromise = $http.get('/api/universities/');

                httpPromise.success(function(university) {
                        deferred.resolve(university);
                    })
                    .error(function(error) {
                        console.error("Error: " + error);
                    });
                return deferred.promise
            }
        };
    });