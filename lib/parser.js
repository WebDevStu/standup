
"use strict";


module.exports = (function () {

    var _format = function (err, stdout) {

        if (err) {
            throw err;
        }

        console.log(stdout);
    };


    return {
        format: _format
    };
} ());