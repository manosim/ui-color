var app = angular.module('controllers.rgbtoui', ['ngRoute', 'ui.bootstrap', 'colorpicker.module']);

app.controller("RgbToUICtrl", function(appConfig, $scope, $filter, $rootScope) {

    $scope.title = "RGB to UIColor Converter";

    // Roll Tide
    $scope.rgbValid = true;
    $scope.alphaValid = true;
    $scope.alpha = "1.0";

    $scope.color = {
        "r": "",
        "g": "",
        "b": "",
    };

    function convertRgbToUi(color) {

        $scope.color.r = color.replace(/^rgba?\(|\s+|\)$/g,'').split(',')[0];
        $scope.color.g = color.replace(/^rgba?\(|\s+|\)$/g,'').split(',')[1];
        $scope.color.b = color.replace(/^rgba?\(|\s+|\)$/g,'').split(',')[2];

        console.log($scope.color);
    }

    $scope.$watch('rgb', function(newVal, oldval){
        if (newVal) {
            convertRgbToUi(newVal);
            updateCopyText();
        } else {
            $rootScope.$broadcast('ColorChanged', appConfig.themePrimary);
        }
    }, true);

    function updateCopyText() {
        $scope.copyObjectiveC = "[UIColor colorWithRed:" + $scope.color.r + " green:" + $scope.color.g + " blue:" + $scope.color.b + " alpha:" + $scope.alpha + "];";
        $scope.copySwift = "UIColor(red:" + $scope.color.r + ", green:" + $scope.color.g + ", blue:" + $scope.color.b + ", alpha:" + $scope.alpha + ")";
    }


});