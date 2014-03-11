var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/appliapp');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    provider  : { type: String, required: false },
    //id        : { type: String, required: true },
    username  : { type: String, required: true, unique: true },
    password  : { type: Number, required: true },
    name      : { 
	familyName : { type: String, required: false },
	firstName  : { type: String, required: false },
	middleName : { type: String, required: false }
    },
    emails     : { type: String, required: true },
    photos  : {
	value      : { type: String, required: false }
    }
});

var UserModel = mongoose.model('User', UserSchema);
var User = mongoose.model('User', UserSchema);

exports.list = function(req, res) {
    return UserModel.find(function (err, users) {
	if (!err) {
	    res.jsonp(users);
	} else {
	    console.log(err);
	}
    });
}

exports.create = function(req, res) {
    var user = new UserModel (
	req.body
    );
    user.save(function (err) {
	if (!err) {
	    console.log("created" + user);
	} else {
	    console.log(err);
	}
    });
    return res.send(user);
}

exports.details = function(req, res) {
  console.log('auth');
  if (req.isAuthenticated()) {
    console.log('authed');
    console.log(req.user.username);
    return UserModel.findOne({ username: req.user.username }, function (err, user) {
      if (!err) {
        console.log('logged');
        res.jsonp(user);
      } else {
        console.log(err);
      }
    });
  } else {
    res.redirect('/');
  }
}

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
	UserModel.findOne({ username: username }, function(err, user) {
	    if (err) { return done(err); }
	    if (!user) {
		return done(null, false, { message: 'Incorrect username' });
	    }
	    if (user.password != password) {
		return done(null, false, { message: 'Incorrect password' });
	    }
	    return done(null, user);
	});
    }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
