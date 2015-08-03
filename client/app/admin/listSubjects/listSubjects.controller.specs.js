// 'use strict';

// describe('Controller: ListSubjCtrl', function () {

//   // load the controller's module
//   beforeEach(module('schoolPlannerApp'));
//   beforeEach(module('socketMock'));

//   var ListSubjCtrl,
//       scope,
//       $httpBackend;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('/api/subjects')
//       .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

//     scope = $rootScope.$new();
//     ListSubjCtrl = $controller('ListSubjCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of subjects to the scope', function () {
//     $httpBackend.flush();
//     expect(scope.allSubjects.length).toBe(4);
//   });
// });