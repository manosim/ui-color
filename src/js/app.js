var app = angular.module('uicolor', [
    'ngRoute',
    'ui.bootstrap',
    'controllers',
]);

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
