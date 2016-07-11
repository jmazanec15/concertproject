var express   = require('express'),
    Base      = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    User   = require('../models/user');

Base.route('/?')
  // GET /
  // -----
  // Render the login page
  .get(function(req, res, next) {
    res.render('login', {
      // csrfToken: req.csrf()
    });
  })
  // POST /
  // ------
  // Log the user in
  .post(function(req, res, next) {
    User.create({
      username: req.body.username,
      password: req.body.password
    }, function(err, user) {
      if (err) {
        console.log(err)
        res.send('err')
      } else {
        console.log(user)
        res.send('worked')
      }

    })
  })  

Base.route('/profiles')
  .get(function(req, res, next) {
    User.find()
  })
module.exports = Base;
