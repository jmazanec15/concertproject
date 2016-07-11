var express   = require('express'),
    Base      = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    User   = require('../models/user');

Base.route('/api')
  .get(function(req, res, next) {
//     $.ajax({
//     url:'http://api.bandsintown.com/artists/Skrillex/events.json?api_version=2.0&app_id=YOUR_APP_ID',
//     type:'get',
//     dataType:'json',
//     success: function(data) {
//         res.send(data);
//     }

// })
  })
