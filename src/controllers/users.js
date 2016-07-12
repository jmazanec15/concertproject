var express   = require('express'),
    Base      = express.Router(),
    fs        = require('fs'),
    User      = require('../models/user'),
    bcrypt    = require('bcrypt');

Base.route('/register')
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
                          res.send('Welcome ' + user.username)
                        }
                      })
                   }
                })
              }
          })
          
  }) 



  Base.route('/login')
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
        res.send('Could not find user');
      } else if (req.body.password === user.password) {
        console.log(req.body.password)
        res.send('Welcome Back')

      } else {
        res.send('Wrong password!')
      }
    })
  })



module.exports = Base;
