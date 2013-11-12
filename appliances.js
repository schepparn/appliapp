var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appliapp');
var Schema = mongoose.Schema;

var ApplianceSchema = new Schema({
    type  : String,
    power : Number,
});	

var ApplianceModel = mongoose.model('Appliance', ApplianceSchema);

// appliapp index
exports.index = function(req, res) {
    return ApplianceModel.find(function (err, appliances) {
	if (!err) {
	    res.jsonp(appliances);
	} else {
	    console.log(err);
	}
    });
}

// appliapp add
exports.addAppliance = function(req, res) {
    var appliance = new ApplianceModel({
	type: req.body.type,
	power: req.body.power,
    });
    appliance.save(function (err) {
	if (!err) {
	    console.log("created");
	} else {
	    console.log(err);
	}
    });
    
    return res.send(appliance);
}
