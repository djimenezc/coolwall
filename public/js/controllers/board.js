angular.module('coolwall.board').controller('BoardController', ['$scope', 'Global', function($scope, Global) {
    $scope.cool = {
        proven: [
        {'name': 'GitHub',
            'snippet': 'Version Control'},
        {'name': 'AngularJS',
            'snippet': 'JavaScript MVC framework'},
        {'name': 'Grunt',
            'snippet': 'JavaScript Task Runner'},
        {'name': 'Bower',
            'snippet': 'Package Manager'}
        ],
        unproven: [],
        somethingInBetween: []
    };

    $scope.uncool = {
        proven: [],
        unproven: [],
        somethingInBetween: []
    };

    $scope.subZero = {
        proven: [],
        unproven: [],
        somethingInBetween: []
    };

}]);