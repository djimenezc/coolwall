angular.module('coolwall.board').controller('BoardController', ['$scope', 'Global', 'IdeaService', function($scope, Global, IdeaService) {
    $scope.global = Global;
    $scope.ideas = [];


    $scope.onInit = function () {
            $scope.ideas = IdeaService.getIdeas();
    };

    $scope.oDraggedModel = null;

    $scope.wishlist =
        [{'title': 'A', 'snippet':'Something', 'board_row':'', 'board_column':''},
        {'title':'B','snippet':'Something else', 'board_row':'', 'board_column':''},
        {'title':'C','snippet':'Whatever', 'board_row':'', 'board_column':''}];

    $scope.dropCallback = function(event, ui, column, row) {
        var oModel = $scope.global.oDraggedModel;

        //assign new position
        oModel.board_row = row;
        oModel.board_column = column;

        console.log('drag ' + oModel.title + 'to column ' + column + ' row ' + row);
        //update backend
        IdeaService.update(oModel);

    };

    $scope.dragStartCallback = function(event, ui, item) {
        $scope.global.oDraggedModel = item;
    };

    $scope.updateIdeaTitle = function(idea) {

        IdeaService.update(idea);
    };

}]);
