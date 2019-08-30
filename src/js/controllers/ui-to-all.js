var app = angular.module('controllers.uitoall', ['ngRoute', 'ui.bootstrap', 'colorpicker.module']);

app.controller("UiToAllCtrl", function (appConfig, $scope, $filter, $rootScope) {

    $scope.title = "UIColor to Hex & Rgb Converter";

    // Roll Tide
    $scope.uiColorValid = true;
    $scope.uiColorString = "";

    $scope.color = {
        "r": "",
        "g": "",
        "b": "",
        "hex": ""
    };

    function convertUiToRgbAndHex(r, g, b) {
        $scope.color.r = Math.round(r * 255);
        $scope.color.g = Math.round(g * 255);
        $scope.color.b = Math.round(b * 255);

        $scope.color.hex = $scope.color.r.toString(16) + $scope.color.g.toString(16) + $scope.color.b.toString(16);
    }

    $scope.$watch('uiColorString', function (newVal, oldval) {
        if (newVal !== "") {
            var parseRegex = /[rR]ed: ?([\d.]*?)f?,? green: ?([\d.]*?)f?,? blue: ?([\d.]*?)f?,? /;
            var parsedGroups = parseRegex.exec(newVal);

            if (parsedGroups) {
                var red = parseFloat(parsedGroups[1]);
                var green = parseFloat(parsedGroups[2]);
                var blue = parseFloat(parsedGroups[3]);

                if (red <= 1 && green <= 1 && blue <= 1) {
                    convertUiToRgbAndHex(red, green, blue);
                    updateCopyText();
                    $rootScope.$broadcast('ColorChanged', $scope.color.hex);
                    $scope.uiColorValid = true;
                } else {
                    $rootScope.$broadcast('ColorChanged', appConfig.themePrimary);
                    $scope.uiColorValid = false;
                    console.log("Invalid UIColor.");
                }
            } else {
                $rootScope.$broadcast('ColorChanged', appConfig.themePrimary);
                $scope.uiColorValid = false;
                console.log("Invalid UIColor.");
            }
        } else {
            $rootScope.$broadcast('ColorChanged', appConfig.themePrimary);
        }

    }, true);

    function updateCopyText() {
        $scope.copyRgb = "rgb(" + $scope.color.r + ", " + $scope.color.g + ", " + $scope.color.b + ")";
        $scope.copyHex = "#" + $scope.color.hex;
    }

});