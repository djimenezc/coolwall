app.directive("ngPath", function(){
    return{
        restrict: 'E',
        link: function(scope, element, attrs){
            $(".flyout-btn").click(function() {
                $(".flyout-btn").toggleClass("btn-rotate");
                $(".flyout").find("a").removeClass();
                return $(".flyout").removeClass("flyout-init fade").toggleClass("expand");
            });

            $(".flyout").find("a").click(function() {
                $(".flyout-btn").toggleClass("btn-rotate");
                $(".flyout").removeClass("expand").addClass("fade");
                return $(this).addClass("clicked");
            });
        },

        templateUrl: "/views/directives/paths.html"
    }

})