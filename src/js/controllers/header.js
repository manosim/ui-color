var app = angular.module('controllers.header', ['ngRoute', 'ui.bootstrap']);

app.controller("HeaderCtrl", function(appConfig, $scope, $location) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    function invertColor(hexTripletColor) {
        var color = hexTripletColor;
        color = color.substring(1);           // remove #
        color = parseInt(color, 16);          // convert to integer
        color = 0xFFFFFF ^ color;             // invert three bytes
        color = color.toString(16);           // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color;                  // prepend #
        return color;
    }

    $scope.selectedColor = appConfig.themePrimary;
    $scope.invertedColor = "none";

    $scope.$on('ColorChanged', function(event, args) {
            $scope.selectedColor = args;
            if (args == appConfig.themePrimary) {
                $scope.invertedColor = "#FFFFFF";
            } else {
                $scope.invertedColor = invertColor(args);
            }
    });

});