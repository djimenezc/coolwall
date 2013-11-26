angular.module('coolwall.board').controller('BoardController', ['$scope', 'Global', 'IdeaService', function($scope, Global, IdeaService) {
    $scope.global = Global;
    $scope.ideas = [];


    $scope.onInit = function () {
            $scope.ideas = IdeaService.getIdeas();
    };

    $scope.oDraggedModel = null;

    $scope.dropCallback = function(event, ui, column, row) {
        var oModel = $scope.oDraggedModel;

        //assign new position
        oModel.board_row = row;
        oModel.board_column = column;

        console.log('drag ' + oModel.title + 'to column ' + column + ' row ' + row);
        //update backend
        IdeaService.update(oModel);

    };

    $scope.dragStartCallback = function(event, ui, item) {
        $scope.oDraggedModel = item;
    };

    $scope.updateIdeaTitle = function(idea) {

        IdeaService.update(idea);
    };

}]);
