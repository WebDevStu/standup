#!/usr/bin/env node

"use strict";

var fs      = require('fs'),
    path    = require('path'),
    util    = require('util'),
    exec    = require('child_process').exec,

    dates   = require('./lib/dates'),
    parser  = require('./lib/parser'),

    isGitRepo = fs.existsSync(process.cwd() + '/.git');

console.log(isGitRepo, dates);

if (isGitRepo) {
    // git log this repo
    exec('git log --after=' + dates.after + ' --before=' + dates.before, parser.format);
} else {
    // start to recursively go through all sub dirrectories looking for .git
    console.log('yolo');

    
}
