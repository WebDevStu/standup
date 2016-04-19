#!/usr/bin/env node

"use strict";

var util = require('util'),
    exec = require('child_process').exec,

    dates = require('./lib/dates'),
    parser = require('./lib/parser');

console.log(dates);
// git log
exec('git log --after=' + dates.after + ' --before=' + dates.before, parser.format);