var express   = require('express'),
    Apis      = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    superagent = require('superagent');

Apis.route('/')
    .get(function(req, res, next) {

      res.render('apis');
        
    })

.post(function(req, res, next) {

  var artist = req.body.artist
  var url = 'http://api.bandsintown.com/artists/';
  // var url = 'http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=projectGA';
  superagent.get(url, function(error, response){
    if (error) {
      res.render('apis');
    } else {
    // var Obj = response.body[0].title;
    var Obj = response.body;
    console.log(Obj);
    // apis.append('<li>'+ Obj +'</li>');
    res.render('apis');
    }
  });
  
})
module.exports = Apis;
