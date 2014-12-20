var app = angular.module('controllers.header', ['ngRoute', 'ui.bootstrap']);

app.controller("HeaderCtrl", function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

});