/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();

app.get('/articles', require('lib/layout'));