'use strict';

const sassTrue = require('sass-true');
const glob = require('glob');
const path = require('path');

// Run tests
glob.sync('test/_*.scss').forEach(function (file) {
  console.log("File: " + file);
  sassTrue.runSass({describe, it},file);
});
