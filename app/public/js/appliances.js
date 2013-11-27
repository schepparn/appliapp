var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appliapp');
var Schema = mongoose.Schema;

var ApplianceSchema = new Schema({
    id        : { type: String, required: true },
    type      : { type: String, required: true },
    power     : { type: Number, required: true },
    imageUrls : { type: String, required: false },
});

var ApplianceModel = mongoose.model('Appliance', ApplianceSchema);

// Inspired by http://tamas.io/contact-manager-written-in-angularjs-express-and-mongodb-episode-1/
// Great curl statements to try from terminal window

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
    return ApplianceModel.find({id: req.params.id}, function (err, appliance) {
	if (!err) {
	    console.log(appliance);
	    res.jsonp(appliance);
	} else {
	    console.log(err);
	}
    });
}

// appliapp create
exports.create = function(req, res) {
    var appliance = new ApplianceModel({
	id: req.body.id,
	type: req.body.type,
	power: req.body.power,
	imageUrl: req.body.imageUrl,
    });
    appliance.save(function (err) {
	if (!err) {
	    console.log("created" + appliance);
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
