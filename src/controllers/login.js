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
      if (err) {
        res.send('Error or Could not find user');
      } else {
        var hash = bcrypt.hashSync(req.body.password, 10);
        bcrypt.compare(req.body.password, hash, function(error, hash) {
          if (error) {
            console.log(error)
          } else if (hash == false) {
            res.send('Incorrect password')
          } else {
            res.redirect('/apis')
          }
        })
      }
    })
  })

  module.exports = loginController
