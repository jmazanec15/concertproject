var express         = require('express'),
    LoginController = express.Router(),
    fs              = require('fs'),
    User            = require('../models/user'),
    bcrypt          = require('bcrypt');

LoginController.route('/?')
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
        console.log(user)
        res.send('Error');
      } else {
        bcrypt.compare(req.body.password, user.password, function(error, result) {
          if (error || !result) {
            console.log(error)
            res.send('Error')
          } else {
            req.session.isLoggedIn = true;
            req.session.userId     = user._id;
            // redirect to /apis
            res.redirect('/apis');
          }
        })
      }
    })
  })

  module.exports = LoginController
