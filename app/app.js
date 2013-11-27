
// Module dependencies.
var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '.'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routing
app.get('/', function(req, res) {
    res.render('index', { title : 'AppliApp' });
});
var appliances = require('./public/js/appliances');
app.get('/appliances', appliances.list);
app.get('/appliances/:id', appliances.retrieve);
app.post('/appliances', appliances.create);
app.put('/appliances/:id', appliances.replace);
app.delete('/appliances/:id', appliances.delete);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
