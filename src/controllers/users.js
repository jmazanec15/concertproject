var express   = require('express'),
    Base      = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    User   = require(__dirname + '/../models/user');

Base.route('/?')
  // GET /
  // -----
  // Render the login page
  .get(function(req, res, next) {
    res.render('login', {});
  })
  // POST /
  // ------
  // Log the user in
  .post(function(req, res, next) {
    User.create({
      username: req.body.username,
      password: req.body.username
    }, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    })
  })  

module.exports = Base;
