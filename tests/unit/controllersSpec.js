describe('AppliCat controllers', function() {
    beforeEach(module('applicatApp'));
    
    describe('ApplianceListCtrl', function() {
	
	it('should create "appliances" model with 1 appliance', inject(function($controller) {
	    var scope = {},
	    ctrl = $controller('ApplianceListCtrl', { $scope: scope });

	    expect(scope.appliances.length).toBe(2);
	}));
    });
});
