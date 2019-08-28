var app = angular.module('controllers.uitoall', ['ngRoute', 'ui.bootstrap', 'colorpicker.module']);

app.controller("UiToAllCtrl", function(appConfig, $scope, $filter, $rootScope) {

    $scope.title = "UIColor to RGB / HEX Converter";

    // Roll Tide
    $scope.uiColorValid = true;
    $scope.uiColorString = "";

    function convertRgbToUi(color) {
        $scope.color.rgb = color;
        $scope.color.r = color.replace(/^rgba?\(|\s+|\)$/g,'').split(',')[0];
        $scope.color.g = color.replace(/^rgba?\(|\s+|\)$/g,'').split(',')[1];
        $scope.color.b = color.replace(/^rgba?\(|\s+|\)$/g,'').split(',')[2];

        $scope.uiColor = {
            "r": ($scope.color.r / 255).toFixed(2),
            "g": ($scope.color.g / 255).toFixed(2),
            "b": ($scope.color.b / 255).toFixed(2),
        };

        console.log($scope.color);
        updateCopyText();
        $rootScope.$broadcast('ColorChanged', $scope.color);
    }

    $scope.$watch('color', function(newVal, oldval){
        if (newVal.r && newVal.g && newVal.b) {

            if (!isNaN(newVal.r) && !isNaN(newVal.g) && !isNaN(newVal.b)) {
                $scope.color.rgb = "rgb(" + $scope.color.r + "," + $scope.color.g + "," + $scope.color.b + ")";
                convertRgbToUi($scope.color.rgb);
            } else {
                $rootScope.$broadcast('ColorChanged', appConfig.themePrimary);
                $scope.rgbValid = false;
                console.log("Invalid RGB.");
            }

        } else {
            $rootScope.$broadcast('ColorChanged', appConfig.themePrimary);
        }
    }, true);

    $scope.$watch('rgb', function(newVal, oldval){
        if (newVal) {
            convertRgbToUi(newVal);
            // console.log(newVal);
        } else {
            $rootScope.$broadcast('ColorChanged', appConfig.themePrimary);
        }
    }, true);

    function updateCopyText() {
        $scope.copyRgb = "rgba(" + $scope.uiColor.r + ", " + $scope.uiColor.g + ", " + $scope.uiColor.b + ");";
        $scope.copyHex = "";
    }

});