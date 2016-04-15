#!/usr/bin/env node

"use strict";

var util = require('util'),
    exec = require('child_process').exec;


// log out the output for now
function logger (error, stdout, stderr) {
    console.log(stdout)
}

// git log
exec("git log", logger);