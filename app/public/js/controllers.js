var applicatApp = angular.module('applicatApp', []);

// Populate appliances list 
// Add new appliance
applicatApp.controller('ApplianceCtrl', ['$scope', '$http', function ($scope, $http) {
    // http call to the db to get the appliances data
    $http({url: 'http://localhost:3000/appliances/', method: 'GET', cache: true}).
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
	$http.post('/appliances', $scope.form).
	    success(function(data) {
		$scope.appliances.push(data);
		// all these three push methods work!
		//$scope.appliances.push({ id : data.id, type : data.type, power : data.power, imageUrl : data.imageUrl });
		//$scope.appliances.push( $scope.form );
		$scope.form = '';
	    });
    };
}]);

// Add appliance to DB and appliances list
applicatApp.controller('ApplianceAddCtrl', ['$scope', '$http', function ($scope, $http) {
    
}]);

