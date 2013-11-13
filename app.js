
// Module dependencies.
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var fs = require('fs');
var http = require('http');
var path = require('path');

var appliances = require('./appliances');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/appliances', appliances.index);
app.get('/appliances/:id', appliances.findById);
app.post('/appliances', appliances.add);
app.put('/appliances/:id', appliances.update);
app.delete('/appliances/:id', appliances.delete);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
