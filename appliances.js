var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appliapp');
var Schema = mongoose.Schema;

var ApplianceSchema = new Schema({
    type  : { type: String, required: true },
    power : { type: Number, required: true },
});

var ApplianceModel = mongoose.model('Appliance', ApplianceSchema);

// appliapp list
exports.list = function(req, res) {
    return ApplianceModel.find(function (err, appliances) {
	if (!err) {
	    res.jsonp(appliances);
	} else {
	    console.log(err);
	}
    });
}

// appliapp retrieve
exports.retrieve = function (req, res) {
    return ApplianceModel.findById(req.params.id, function (err, appliance) {
	if (!err) {
	    res.jsonp(appliance);
	} else {
	    console.log(err);
	}
    });
}

// appliapp create
exports.create = function(req, res) {
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

// appliapp replace
exports.replace = function (req, res) {
    return ApplianceModel.findById(req.params.id, function (err, appliance) {
	appliance.type = req.body.type;
	appliance.power = req.body.power;
	appliance.save(function (err) {
	    if (!err) {
		console.log("updated");
	    } else {
		console.log(err);
	    }
	    res.send(appliance);
	});
    });
}

// appliapp delete
exports.delete = function (req, res) {
    return ApplianceModel.findById(req.params.id, function (err, appliance) {
	return appliance.remove(function (err) {
	    if (!err) {
		console.log("removed");
		return res.send('');
	    } else {
		console.log(err);
	    }
	});
    });
}
