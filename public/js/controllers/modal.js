angular.module('coolwall.modals', ['ui.bootstrap', 'coolwall.board']);
var ModalDemoCtrl = function ($scope, $modal, $log) {

    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'createIdeaModal.html',
            controller: ModalInstanceCtrl,
            resolve: {
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
};

var ModalInstanceCtrl = function ($scope, $modalInstance, IdeaService) {

    $scope.ok = function () {
        IdeaService.create(this.ideaTitle);
        $modalInstance.close();
    };

    $scope.cancel = function () {
        console.log("cancel");
        $modalInstance.dismiss('cancel');
    };
};