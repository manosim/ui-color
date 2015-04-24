var hexToRgb = {

    convert: function (hex) {

        var r = (parseInt(hex.substring(0,2), 16)/255).toFixed(2);
        var g = (parseInt(hex.substring(2,4), 16)/255).toFixed(2);
        var b = (parseInt(hex.substring(4,6), 16)/255).toFixed(2);

        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            return {
                "r": r,
                "g": g,
                "b": b,
            };
        } else {
            console.log("Invalid HEX Color.");
            return {
                "r": "",
                "g": "",
                "b": "",
            };
        }

    },

};

module.exports = hexToRgb;