angular.module('coolwall.system').controller('IndexController', ['$scope', 'Global', function($scope, Global) {
        $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    },{
        'title': 'View Board',
        'link': 'dashboard'
    }];

}]);