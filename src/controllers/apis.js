var express   = require('express'),
    Apis      = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    superagent = require('superagent');

Apis.route('/')
  //GET
  .get(function(req, res, next) {
    res.render('apis');
  })
  //POST
  .post(function(req, res, next) {
    // sets artists
    var artist = req.body.artist;
    // var url = 'http://api.bandsintown.com/artists/';
    var url = 'http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=projectGA';
    superagent.get(url, function(error, response){
      if (error) {
        res.render('apis');
      } else {
      var Obj = response.body;
      //console.log(Obj)
      var eventsArray = [];
      var datesArray = [];
      for (var i = 0; i <= Obj.length - 1; i++) {
        var date = Obj[i].datetime;
        // 2016-10-08T20:00:00
        var year = date[0] + date[1] + date[2] + date[3],
            day  = date[5] + date[6],
            month = date[8] + date[9]
            date = day + '/' + month + '/' + year;
        eventsArray.push(Obj[i].title + ' Date: ' + date);   
      }
      res.render('apis',{pageTitle: eventsArray});
      }
    }); 
  })

module.exports = Apis;
