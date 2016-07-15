var mongoose = require('mongoose');

var connectionString = process.env.NODE_ENV === 'production' ? 'mongodb://cgoudarzi:Cumberbatch64!@ds059634.mlab.com:59634/general_apples_concert' : 'mongodb://localhost/concerts'

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ' + connectionString);
})

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error ' + err);
})

mongoose.connection.on('disconnected', function() {
  console.log('mongoose disconnected');
})


