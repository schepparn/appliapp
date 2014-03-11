function AppliCtrl($scope, $http, $cacheFactory, $log) {
    // Default url
    $scope.url = 'http://localhost:3000/appliances/';

    // Get list of appliances
    $http({method: 'GET', url: $scope.url, cache: true}).
	success(function(data) {
	    $scope.appliances = data;
	}).
	error(function(data, status, headers, config) {
	    $scope.appliances = data || "Request failed";
	});

    // Add appliance
    $scope.addAppliance = function() {

        $http.post('/appliances', $scope.form).
            success(function(data) {
		$scope.form = '';
		
		$scope.appliances.push({type: data.type, power: data.power});
	    });
    };

    // U
}
