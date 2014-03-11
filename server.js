
// Module dependencies.
var express = require('express');
var http = require('http');
var passport = require('passport');
var path = require('path');
var app = module.exports = express();

// all environments
app.set('views', __dirname + '/client/partials');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/server'));

// Passport requirements
// http://passportjs.org/guide/configure/
app.use(express.static('public'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'super secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);


// development only
app.use(express.logger('dev'));
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// External routes
// require('./server/routes.js')(app);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appliapp');

// RESTful Routes 
// http://jacobmumm.com/2012/09/11/single-page-apps-with-node-and-angular/
var appliances = require(__dirname + '/server/appliances/model');
app.get('/api/appliances', appliances.list);
app.get('/api/appliances/:id', appliances.retrieve);
app.post('/api/appliances', appliances.create);
app.put('/api/appliances/:id', appliances.replace);
app.delete('/api/appliances/:id', appliances.delete);

var users = require(__dirname + '/server/user/models');
app.get('/api/register', users.list);
app.post('/api/register', users.create);
app.get('/api/users/:username', users.details); 

app.post('/api/login', 
	 passport.authenticate('local', { successRedirect: '/',
					  failureRedirect: '#/login',
					  failureFlash: false })
);
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Default Route
app.get('/', function(req, res) {
    res.render(__dirname + '/client/index');
});

app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
