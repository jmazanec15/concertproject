  var express  = require('express'),
    Home       = express.Router(),
    fs         = require('fs'),
    mongoose   = require('mongoose');


Home.route('/')
  .get(function(req, res, next) {
    res.render('home')
  });
module.exports = Home;
