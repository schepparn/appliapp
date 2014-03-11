var appliApp = angular.module('appliApp', [
    'ngRoute', 
    'appliAppControllers', 'appliAppFilters',
]);

appliApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
	when('/register', {
	    templateUrl: 'partials/user-registration.html',
	    controller: 'RegisterCtrl',
	}).
	when('/login', {
		 templateUrl: 'partials/user-login.html',
		 controller: 'LoginCtrl',
	}).
	when('/user/:username', {
	    templateUrl: 'partials/user-detail.html',
	    controller: 'UserDetailCtrl',
	}).
	when('/users', {
	    templateUrl: 'partials/users',
	    controller: 'UsersCtrl',
	}).
	when('/admin', {
	    templateUrl: 'partials/admin',
	    controller: 'AdminCtrl',
	}).
	when('/appliances', {
	    templateUrl: 'partials/appliance-list.html',
	    controller: 'ApplianceCtrl',
	}).
	when('/appliances/:applianceId', {
	    templateUrl: 'partials/appliance-detail.html',
	    controller: 'ApplianceDetailCtrl',
	}).
	otherwise({
	    redirectTo: '/appliances'
	});
}]);
