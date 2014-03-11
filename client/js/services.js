appliApp.module('appliApp')
.factory('Auth', function($http, $cookieStore) {
    
    var accessLevels = routingConfig.accessLevels;
    var userRoles = routingConfig.userRoles;
    var currentUser = $cookieStore.get('user') || { username: '', role: userRoles.public };

    $cookieStore.remove('user');

    function changeUser(user) {
	_.extend(currentUser, user);
    };

});
