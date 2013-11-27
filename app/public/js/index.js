// Registring models
//var Appliance = require('mongoose').model('Appliance');


// Home page
exports.index = function(req, res){
  res.render('index', path.join(__dirname, '../'), { title: 'Express' });
};
