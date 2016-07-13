var express         = require('express'),
    loginController = express.Router(),
    fs              = require('fs'),
    User            = require('../models/user'),
    bcrypt          = require('bcrypt');

loginController.route('/?')
  //GET /
  //-----
  //Render the login page
  .get(function(req, res, next) {
    res.render('login', {
    });
  })
  //POST /
  //-----
  //Log the user in
  .post(function(req, res, next) {
    User.findOne({username: req.body.username}, function(err, user) {
      if (err || !user) {
        console.log(hash)
        res.send('Error');
      } else {
        bcrypt.compare(req.body.password, user.password, function(error, result) {
          if (error || !result) {
            console.log(error)
            res.send('Error or Incorrect password')
          } else {
            req.session.isLoggedIn = true;
            req.session.userId     = user._id;
            console.log(result)
            res.redirect('/apis')
          }
        })
      }
    })
  })

  module.exports = loginController
