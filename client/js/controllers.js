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

appliAppControllers.controller('RegisterCtrl', ['$scope', '$http', function ($scope, $http) {
    // http call to the db to get the user data
    $http({url: '/api/register/', method: 'GET', cache: true}).
	success(function(data) {
	    $scope.users = data;
	}).
	error(function(data) {
	    $scope.users = data || "Request failed";
	});

    // http post call to the db to save user 
    // push to user list
    $scope.registerUser = function() {
	$http.post('/api/register', $scope.form).
	    success(function(data) {
		$scope.users.push(data);
		$scope.form = '';
	    });
    };
}]);
appliAppControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', '$http', function (
    $scope, $routeParams, $http) {
    $http({url: '/api/users/' + $routeParams.username, method: 'GET', cache: true}).
	success(function(data) {
	    $scope.user = data;
	}). 
	error(function(data) {
	    $scope.user = data || "Detailed request failure";
	});
}]);
