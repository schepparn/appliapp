var appliApp = angular.module('appliApp', [
    'ngRoute', 
    'appliAppControllers',
]);

appliApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/appliances', {
	    templateUrl: 'partials/appliance-list.html',
	    controller: 'ApplianceCtrl'
	}).
	when('/appliances/:applianceId', {
	    templateUrl: 'partials/appliance-detail.html',
	    controller: 'ApplianceDetailCtrl'
	}).
	otherwise({
	    redirectTo: '/appliances'
	});
}]);
