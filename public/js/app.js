window.app = angular.module('coolwall', ['ngRoute', 'ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'coolwall.system', 'coolwall.articles','coolwall.ideas', 'coolwall.board', 'ngDragDrop', 'xeditable']);


app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
angular.module('coolwall.system', []);
angular.module('coolwall.articles', []);
angular.module('coolwall.ideas', []);
angular.module('coolwall.board', []);
