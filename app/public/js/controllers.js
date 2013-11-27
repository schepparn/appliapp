var appliAppControllers = angular.module('appliAppControllers', []);

// Populate appliances list 
// Add new appliance
appliAppControllers.controller('ApplianceCtrl', ['$scope', '$http', function ($scope, $http) {
    // http call to the db to get the appliances data
    $http({url: '/api/appliances/', method: 'GET', cache: true}).
	success(function(data) {
	    $scope.appliances = data;
	}).
	error(function(data) {
	    $scope.appliances = data || "Request failed";
	});
    $scope.orderProp = 'type';

    // http post call to the db to save appliance 
    // push to appliance list
    $scope.addAppliance = function() {
	$http.post('/api/appliances', $scope.form).
	    success(function(data) {
		$scope.appliances.push(data);
		$scope.form = '';
	    });
    };
}]);

appliAppControllers.controller('ApplianceDetailCtrl', ['$scope', '$routeParams', '$http', function (
    $scope, $routeParams, $http) {
//    $http.get('/api/appliances/' + $routeParams.applianceId).
    $http({url: '/api/appliances/' + $routeParams.applianceId, method: 'GET', cache: true}).
	success(function(data) {
	    $scope.appliance = data[0];
	}). 
	error(function(data) {
	    $scope.appliance = data[0] || "Detailed request failure";
	});
}]);
