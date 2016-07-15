// Main Server File
// ================
// Responsible for configuring, 
// starting, and running the server.

// Require the dependencies
var dotenv     = require('dotenv').config(),
    express    = require('express'),
    app        = express(),
    exphbs     = require('express-handlebars'),
    hbs        = require('hbs'),
    fs         = require('fs'),
    bodyParser = require('body-parser'),
    session    = require('express-session'),
    _          = require('lodash');

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

app.use(session({
  name: 'sessionclass',
  resave: false,
  saveUninitialized: false,
  secret: 'wdcbjhcdwhjbcdhb'
}));
// Configure serving static assets
app.use(express.static(__dirname + '/public'));

// require db

require('./models/db');

// require controllers
var sessionTracker = function(req, res, next) {
  var requiresAuth  = ['apis'],
      path          = req.path.split('/').filter(function(pathName) {
        return pathName  !== '';
      })

  // 1. Check if path matches any requiring authentication
  // 2. If yes, check for req.session.isLoggedIn AND req.session.userId
  // 3. If no, redirect to signup or login page
  if (_.includes(requiresAuth, path[0])) {
    if (req.session.isLoggedIn && req.session.userId)  next();
    else res.redirect('/login');
  } else {
    res.redirect('/login');
  }
}

app.use('/register', require('./controllers/register'));
app.use('/login', require('./controllers/login'));
app.use('/home', require('./controllers/home'));
app.use(sessionTracker);
app.use('/apis', require('./controllers/apis'));

// Start server, listen in on a port
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
