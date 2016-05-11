
"use strict";


module.exports = (function () {

    // privates
    var 

        /**
         * formats the string of log
         *
         * @param  {Error} err     [error thrown]
         * @param  {String} stdout [contents of git log]
         *
         * @return {[type]}        [description]
         */
        _format = function (err, stdout) {

        if (err) {
            throw err;
        }

        console.log(stdout);
    };

    // exposed methods
    return {
        format: _format
    };

} ());
