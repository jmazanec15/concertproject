var express            = require('express'),
    registerController = express.Router(),
    fs                 = require('fs'),
    User               = require('../models/user'),
    bcrypt             = require('bcrypt');

registerController.route('/?')
  // GET /
  // -----
  // Render the register page
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
                          req.session.isLoggedIn = true;
                          req.session.userId     = user._id;
                          res.redirect('/apis')
                        }
                      })
                   }
                })
              }
          })
          
  }) 

  module.exports = registerController;
