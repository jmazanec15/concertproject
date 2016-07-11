var express   = require('express'),
    Base      = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    User   = require('../models/user');

Base.route('/?') 
  .get(function(req, res, next) {
    res.render('../views/login')
  })

module.exports = Base;
