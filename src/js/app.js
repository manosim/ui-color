var app = angular.module('uicolor', [
    'ngRoute',
    'ui.bootstrap',
    'ngClipboard',
    'colorpicker.module',
    'controllers',
]);


app.constant('appConfig', {

  // Productions
  themePrimary: "#0072bc",

});


app.run(function($rootScope, $route, $location) {

    $rootScope.$on('$locationChangeSuccess', function() {
        if (typeof ga !== 'undefined' && $route.current.$$route){
            ga('send', 'event', 'page', 'view', $route.current.$$route.controller);
        }
    });

});

app.config(['$routeProvider',
    function($routeProvider) {

    $routeProvider
    .when('/hex-to-ui', {
        templateUrl: 'templates/hex-to-ui.html',
        controller: 'HexToUICtrl',
    })
    .when('/rgb-to-ui', {
        templateUrl: 'templates/rgb-to-ui.html',
        controller: 'RgbToUICtrl',
    })
    .when('/ui-to-all', {
        templateUrl: 'templates/ui-to-all.html',
        controller: 'UiToAllCtrl',
    })
    .otherwise({
        redirectTo: '/hex-to-ui'
    });

}]);

app.config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("../images/ZeroClipboard.swf");
}]);