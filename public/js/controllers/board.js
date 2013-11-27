angular.module('coolwall.board').controller('BoardController', ['$scope', 'Global', 'IdeaService', function ($scope, Global, IdeaService, Ideas) {
    $scope.global = Global;
    $scope.global.ideas = [];

    $scope.onInit = function () {
        $scope.global.ideas = IdeaService.getIdeas();
    };

    $scope.global.oDraggedModel = null;

    // option for the accordion to close others when opening one
    $scope.oneAtATime = true;

    $scope.dropCallback = function (event, ui, column, row) {
        var oModel = $scope.global.oDraggedModel;
        //assign new position
        oModel.board_row = row;
        oModel.board_column = column;

     //   console.log('drag ' + oModel.title + 'to column ' + column + ' row ' + row);
        //update backend
        IdeaService.update(oModel);

    };

    $scope.dragStartCallback = function (event, ui, item) {
        $scope.global.oDraggedModel = item;
    };

    $scope.updateIdeaTitle = function (idea) {

        IdeaService.update(idea);
    };

    $scope.dropTrashCallback = function(event, ui) {
        var oModel = $scope.global.oDraggedModel;

        IdeaService.remove(oModel);

         for (var i in $scope.ideas) {
             if ($scope.ideas[i] == oModel) {
                 $scope.ideas.splice(i, 1);
             }
         }
    };

    $scope.createIdea = function () {
        IdeaService.create(this.title);
        this.title = "";
    };

}]);