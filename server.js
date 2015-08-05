process.env.NODE_ENV = process.env.NODE_ENV || 'deployment';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);
module.exports = app;
console.log("Server is running at localhost:3000");


