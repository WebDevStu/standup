
"use strict";

var date = new Date(),
    day = date.getDay(),
    dateAdjust = date.getDate() - 2;

if (day === 0) {
    // sunday - why would you?
    dateAdjust = date.getDate() - 3;
} else if (day === 1) {
    // if monday get fri
    dateAdjust = date.getDate() - 4;
}

date.setDate(dateAdjust);


function formatDate (date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}



module.exports = {
    after: formatDate(date),
    before: formatDate(new Date())
};