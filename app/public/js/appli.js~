function ApplianceCtrl($scope, $http) {
    /*$http({method: 'jsonp', url: 'http://localhost:3000/appliances?callback=JSON_CALLBACK'}).success(function(data, status, headers, config) {
        $scope.appliances = data;
    }).error(function(data, status, headers, config) {
        // handle error 
    });*/
    $http.get('http://localhost:3000/appliances/').
	success(function(data) {
	    $scope.appliances = data;
	});
    //$scope.appliances = $http({method: 'jsonp', url: 'http://localhost:3000/appliances?callback=JSON_CALLBACK'}).success(function(data));

    $scope.form = {};

    $scope.addAppliance = function() {
        $http.post('/appliances', $scope.form).
            success(function(data) {
		$scope.form = {};
	    });
    };
}
