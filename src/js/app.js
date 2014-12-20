var app = angular.module('uicolor', [
    'ngRoute',
    'ui.bootstrap',
]);

app.config(['$routeProvider',
    function($routeProvider) {

    $routeProvider
    .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
    })

    .otherwise({
        redirectTo: '/home'
    });

}]);

app.controller("HomeCtrl", function($scope) {

    $scope.title = "Homepage";

});