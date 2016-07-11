// Main Server File
// ================
// Responsible for configuring, 
// starting, and running the server.

// Require the dependencies
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    hbs     = require('hbs'),
    fs      = require('fs');
    bodyParser = require('body-parser');

// Configuring the applicartion
app.engine('hbs', exphbs({
  defaultLayout:  'main',
  partialsDir:    __dirname + '/views/partials',
  layoutsDir:     __dirname + '/views/layouts',
  extname:        '.hbs'
}));

app.use(bodyParser.json())// supports json encoded bodies
app.use(bodyParser.urlencoded({extended: true}))// supports encoded bodies

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Configure serving static assets
app.use(express.static(__dirname + '/public'));

// require db

require('./models/db');

// require users controller
app.use('/users', require('./controllers/users'));


app.use('/apis', require('./controllers/apis'));

// Start server, listen in on a port
var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
