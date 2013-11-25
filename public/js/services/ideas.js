//Ideas service used for articles REST endpoint
angular.module('coolwall.ideas').factory("Ideas", ['$resource', function($resource) {
    return $resource('ideas/:ideaId', {
        ideaId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);