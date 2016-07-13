  var express  = require('express'),
    Apis       = express.Router(),
    fs         = require('fs'),
    mongoose   = require('mongoose'),
    User       = require('../models/user'),
    superagent = require('superagent');


Apis.route('/add')
  .post(function(req, res, next) {
    var id = req.session.userId 
    //req.body.event, '<------ SESSION OBJECT')
    User.findByIdAndUpdate(id, {$push: {"concertIDs": req.body.event}}, 
      {safe: true, upsert: true, new: true}, 
      function(err, user) {
        if (err) {
          console.log(err);
          res.send(err)
        } else {
          console.log(user.concertIDs);
          console.log(user)
          res.json(user)
        }
    })
    // we respond with res.json()
   
      // status: 'ok',
      // concerts: users.concertArray
   // <--- Don't render arute onan AJAX call
    //  Respond with jSON(res.json({...}))

    // if error...
    // res.json({
    //   status: 'error',
    //   concerts: []
    // })
  });

Apis.route('/')
  //GET
  .get(function(req, res, next) {
    res.render('apis');
  })
  //POST
  .post(function(req, res, next) {
    var artist = req.body.artist;
    var url = 'http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=projectGA';
    superagent.get(url, function(error, response){
      if (error) {
        res.render('apis');
      } else {
      var Obj = response.body;
      var eventsArray = [];
      var datesArray = [];
      for (var i = 0; i <= Obj.length - 1; i++) {
        var date  = Obj[i].datetime;
        var year  = date[0] + date[1] + date[2] + date[3],
            day   = date[5] + date[6],
            month = date[8] + date[9]
            date  = day + '/' + month + '/' + year;
        eventsArray.push(Obj[i].title + ' Date: ' + date);   
      }
      res.render('apis',{pageTitle: eventsArray});
      }
    }); 
  })

module.exports = Apis;
