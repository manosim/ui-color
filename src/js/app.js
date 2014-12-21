var app = angular.module('uicolor', [
    'ngRoute',
    'ui.bootstrap',
    'ngClipboard',
    'colorpicker.module',
    'controllers',
]);

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

    .otherwise({
        redirectTo: '/hex-to-ui'
    });

}]);

app.config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("../images/ZeroClipboard.swf");
}]);