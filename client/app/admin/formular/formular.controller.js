// 'use strict';

// angular.module('schoolPlannerApp')
//   .controller('FormCtrl', function ($scope, $http, Auth, ) {

//     $scope.isAdmin = Auth.isAdmin; 

//     $scope.subject = {
//       faculty: 'Electronica',
//       year: '4',
//       serie: 'C',
//       name: 'Prelucrarea digitala a semnalelor' ,
//       teacher: 'Ionescu Petre' ,
//       // weeks: 'all',
//       // days: 'thusday',
//       // hour:'13:00 - 16:00',
//       // classroom: '402B',
//       // details: 'detalii sjasdkjhdsahkjdsakhjdsajsadkhsadhjkdsajhkdsakhjdsakhjdsahjk'


      
//     };
//     // Use the User $resource to fetch all users
    


// });

'use strict';

  angular.module('schoolPlannerApp')
  .controller('FormCtrl', function ($scope, $http, socket) {
    $scope.subjects = [];
    

    $http.get('/api/subjects').success(function(subjects) {
      $scope.subjects = subjects;
      socket.syncUpdates('subject', $scope.subjects);
    });

    $scope.addSubjects = function() {
      if($scope.name === '') {
        return;}
     
      $http.post('/api/subjects', { name: $scope.name
      								              faculty: $scope.faculty,
                                    year: $scope.year,
                                    serie: $scope.serie,
                                    teacher: $scope.teacher

                                     });
      $scope.name = '';
    };

    /*$scope.deleteSubject = function(subject) {
      $http.delete('/api/subjects/' + subject._id);
    };*/

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('subject');
    });
  });