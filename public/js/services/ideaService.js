angular.module('coolwall.ideas').service('IdeaService', function ($location, Ideas) {


    this.getIdeas = function () {
        console.log("getideas");
        return Ideas.query(function (ideas) {
            this.allideas = ideas;
        });
    };

    this.update = function (idea) {
        console.log("update idea");

        if (!idea.updated) {
            idea.updated = [];
        }
        idea.updated.push(new Date().getTime());

         idea.$update();
    };

    this.remove = function(idea) {
         idea.$remove();
    };


    // $scope.global = Global;
    this.create = function (title) {
        var idea = new Ideas({
            title: title,
            board_row: 99,
            board_column: 99
        });
        idea.$save(function (response) {
            $location.path("ideas/" + response._id);
            console.log(response._id);
        });


    };




    // $scope.find = function() {
    //     Ideas.query(function(ideas) {
    //         $scope.ideas = ideas;
    //     });
    // };

    // $scope.findOne = function() {
    //     Ideas.get({
    //         ideaId: $routeParams.ideaId
    //     }, function(idea) {
    //         $scope.idea = idea;
    //     });
    // };
});
