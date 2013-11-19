//Articles service used for articles REST endpoint
angular.module('mean.ideas').factory("Ideas", ['$resource', function($resource) {
    return $resource('ideas/:idead', {
        ideaId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);