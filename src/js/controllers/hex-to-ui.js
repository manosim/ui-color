var app = angular.module('controllers.hextoui', ['ngRoute', 'ui.bootstrap', 'colorpicker.module']);

app.controller("HexToUICtrl", function($scope, $filter) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    $scope.title = "HEX to UIColor Converter";

    // Roll Tide
    $scope.hexValid = true;
    $scope.alphaValid = true;
    $scope.alphaInput = "1.0";
    $scope.alpha = "1.0";


    function convertHexToRgb(hex) {
        var r = (parseInt(hex.substring(0,2), 16)/255).toFixed(2);
        var g = (parseInt(hex.substring(2,4), 16)/255).toFixed(2);
        var b = (parseInt(hex.substring(4,6), 16)/255).toFixed(2);

        console.log(hex);

        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            var tempHex = "#" + hex;
            $scope.style =  { bgColor: tempHex };

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
            $scope.hexBgColor = {'background-color':'#FFF'};
            $scope.hexValid = false;
            console.log("Invalid.");
        }

        console.log("--------------");
    }

    $scope.hexToRgb = function(hex) {
        hex = hex.replace('#','');
        if (hex.length == 3) {
            var tempHex = hex + hex.charAt(2) + hex.charAt(1) + hex.charAt(0);
            convertHexToRgb(tempHex);
        } else if (hex.length == 6) {
            convertHexToRgb(hex);
        } else {
            $scope.hexValid = false;
        }
    };

    $scope.alphaChanged = function(alpha) {
        if (!isNaN(alpha)) {
            if ((alpha >=0) && (alpha <=1)) {
                console.log("Yes");
                $scope.alphaValid = true;

                if ((alpha == "1") || (alpha == "0")) {
                    $scope.alpha = alpha + ".0";
                } else {
                    $scope.alpha = alpha;
                }
            } else {
                console.log("ERROR");
                $scope.alpha = "1.0";
                $scope.alphaValid = false;
            }
        } else {
            console.log("ERROR");
            $scope.alpha = "1.0";
            $scope.alphaValid = false;
        }

        if (!alpha.length) {
            $scope.alpha = "1.0";
        }
        updateCopyText();
    };

    $scope.$watch('hex', function(hex, oldval){
        if (hex) {
            console.log("---------");
            $scope.hexToRgb(hex);
            updateCopyText();
        }
    }, true);

    function updateCopyText() {
        $scope.copyObjectiveC = "[UIColor colorWithRed:" + $scope.uiColor.r + " green:" + $scope.uiColor.g + " blue:" + $scope.uiColor.b + " alpha:" + $scope.alpha + "];";
        $scope.copySwift = "UIColor(red:" + $scope.uiColor.r + ", green:" + $scope.uiColor.g + ", blue:" + $scope.uiColor.b + ", alpha:" + $scope.alpha + ")";
    }


});