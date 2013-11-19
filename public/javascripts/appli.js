function ApplianceCtrl($scope, $http, $cacheFactory, $log) {
    // Default method and url
    $scope.method = 'GET';
    $scope.url = 'http://localhost:3000/appliances/';

    // Get list of appliances
    $http({method: $scope.method, url: $scope.url, cache: true}).
	success(function(data) {
	    $scope.appliances = data;
	}).
	error(function(data, status, headers, config) {
	    $scope.appliances = data || "Request failed";
	});

    // Add new appliance
    $scope.addAppliance = function() {

        $http.post('/appliances', $scope.form).
            success(function(data) {
		$scope.form = '';
		
		$scope.appliances.push({type: data.type, power: data.power});
	    });
    };
}
