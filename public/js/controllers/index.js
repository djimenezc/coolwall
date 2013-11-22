angular.module('coolwall.system').controller('IndexController', ['$scope', 'Global', function($scope, Global) {
    $scope.global = Global;

    $scope.menu = [];
}]);