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

    // Roll Tide
    $scope.hexValid = true;
    function convertHexToRgb(hex) {
        hex = hex.replace('#','');
        var r = (parseInt(hex.substring(0,2), 16)/255).toFixed(2);
        var g = (parseInt(hex.substring(2,4), 16)/255).toFixed(2);
        var b = (parseInt(hex.substring(4,6), 16)/255).toFixed(2);

        console.log(hex);

        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            $scope.hexValid = true;
            $scope.uiColor = {
                "r": r,
                "g": g,
                "b": b,
            };
            console.log(r);
            console.log(g);
            console.log(b);
        } else {
            $scope.hexValid = false;
            console.log("Invalid.");
        }

        console.log("--------------");
    }

    $scope.hexToRgb = function(hex) {
        console.log(hex.length);
        if ($scope.hex.length == 3) {
            var tempHex = hex + hex.charAt(2) + hex.charAt(1) + hex.charAt(0);
            convertHexToRgb(tempHex);
        } else if ($scope.hex.length == 6) {
            convertHexToRgb($scope.hex);
        } else {
            $scope.hexValid = false;
        }
    };

});