//'use strict';

describe('Controller: HeaderController', function() {

	// load the controller's module
	beforeEach(module('coolwall.system'));

	var HeaderController, scope, HeaderCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrl = $controller('HeaderController', {
            $scope: scope
        });
    }));

    /*it('should attach a list of menu items to the scope', function () {
        expect(scope.menu.length).toBe(2);
    });*/
});
