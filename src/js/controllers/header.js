var app = angular.module('controllers.header', ['ngRoute', 'ui.bootstrap']);

app.controller("HeaderCtrl", function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    $scope.selectedColor = "#0072bc";

    $scope.$on('ColorChanged', function(event, args) {
        if (args != "#ffffff") {
            $scope.selectedColor = args;
        } else {
            $scope.selectedColor = "#0072bc";
        }
    });

});