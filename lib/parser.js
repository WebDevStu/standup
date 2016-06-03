
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

            if (!stdout.length) {
                return 'No commits :(';
            }

            return stdout;
        };

    // exposed methods
    return {
        format: _format
    };

} ());
