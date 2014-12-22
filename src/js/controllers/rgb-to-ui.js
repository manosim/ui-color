var app = angular.module('controllers.rgbtoui', ['ngRoute', 'ui.bootstrap', 'colorpicker.module']);

app.controller("RgbToUICtrl", function(appConfig, $scope, $filter, $rootScope) {

    $scope.title = "RGB to UIColor Converter";


});