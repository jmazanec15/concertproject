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
    User.findOne({username: req.body.password}, function(err, user) {
      if (err || !user) {
        console.log(hash)
        res.send('Error or Incorrect Password');
      } else {
        var hash = bcrypt.hashSync(user.password, 10);
        bcrypt.compare(req.body.password, hash, function(error, result) {
          if (error || result) {
            console.log(error)
            res.send('Error or Incorrect password')
          } else {
            console.log(result)
            res.redirect('/apis')
          }
        })
      }
    })
  })

  module.exports = loginController
