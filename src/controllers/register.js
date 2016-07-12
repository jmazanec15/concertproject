var express            = require('express'),
    registerController = express.Router(),
    fs                 = require('fs'),
    User               = require('../models/user'),
    bcrypt             = require('bcrypt');

registerController.route('/?')
  // GET /
  // -----
  // Render the login page
  .get(function(req, res, next) {
    res.render('register', {
      // csrfToken: req.csrf()
    });
  })
  // POST /
  // ------
  // Add user account to user model
  .post(function(req, res, next) {
          //check for exisiting users
          User.findOne({username: req.body.username}, function(err, user) {
              if (err || user) {
                console.log(err)
                res.send('Error or username already taken');
              } else {
                    bcrypt.hash(req.body.password, 10, function(err, hash) {
                    if (err) {
                      console.log(err),
                      res.send('Err')
                    } else {
                      User.create({
                        username: req.body.username,
                        password: hash
                      }, function (error, user) {
                        if (error) {
                          console.log(error)
                        } else {
                          console.log(user)
                          res.redirect('/apis')
                        }
                      })
                   }
                })
              }
          })
          
  }) 

  module.exports = registerController;
