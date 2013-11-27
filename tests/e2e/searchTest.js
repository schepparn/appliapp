// searchTest.js
describe('appliapp homepage', function() {
    it('should filter the appliance list as user types into the search box', function() {
	browser.get('http://localhost:3000');

	var applianceList = element.all(by.repeater('appliance in appliances'));

	expect(applianceList.count()).toEqual(75);

	var filterSearch = element(by.model('query'));
	    filterSearch.sendKeys('toast');

	expect(applianceList.count()).toEqual(3);
    });
});
