
"use strict";

var date = new Date(),
    day = date.getDay(),
    dateAdjust = date.getDate() - 2;

// work out the last working day
if (day === 0) {
    // sunday - why would you?
    dateAdjust = date.getDate() - 3;
} else if (day === 1) {
    // if monday get fri
    dateAdjust = date.getDate() - 4;
}

// update date with adjustments
date.setDate(dateAdjust);


/**
 * format the date supplied
 *
 * @param  {Date} date   [js date object]
 * @return {String}      [parsed date string]
 */
function formatDate (date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}


// exports
module.exports = {
    after:  formatDate(date),
    before: formatDate(new Date())
};
