angular.module('schoolPlannerApp')

    .controller('DetailsCtrl', function ($scope, $location, $rootScope, $state, $window) {
        var fromState = '';
        $scope.image = $rootScope.image || '/assets/images/images.jpg';
        $scope.goTo = function (path) {
            $location.path(path);
        }
        var _scope = $scope;
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                $scope.detailItem = $rootScope.detailItem;
                $rootScope.$previousState = fromState;
                console.log(fromState);

            })
        $scope.goBack = function() {
            if($scope.detailItem) {
                $state.go($rootScope.$previousState.name);
            } else {
                $state.go('universities');
            }
        }
    });