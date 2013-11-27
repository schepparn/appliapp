describe('AppliCat App', function() {
    
    describe('Appliance list view', function() {
	
	beforeEach(function() {
	    //browser().navigateTo('../../views/index.ejs');
	    browser().navigateTo('index');
	});

	it('should filter the appliance list as user types into the search box', function() {
	    expect(repeater('.appliances li').count()).toBe(2);

	    input('query').enter('toast');
	    expect(repeater('.appliances li').count()).toBe(1);
	});
    });
});
