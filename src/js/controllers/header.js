var app = angular.module('controllers.header', ['ngRoute', 'ui.bootstrap']);

app.controller("HeaderCtrl", function(appConfig, $scope, $location) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    $scope.selectedColor = appConfig.themePrimary;

    $scope.$on('ColorChanged', function(event, args) {
        $scope.selectedColor = args;
    });

});