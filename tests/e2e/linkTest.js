// linkTest.js
describe('appliapp homepage', function() {

    var ptor = protractor.getInstance();

    it('should render appliance specific links', function() {
	browser.get('http://localhost:3000');

	var filterSearch = element(by.model("query"));
	filterSearch.sendKeys('bild');

	var pictureLink = element(by.css('[class="thumb"]'));
	pictureLink.click();
	
	ptor.getCurrentUrl().
	    then(function(url) {
		expect(url).toContain('#/appliances/bild');
	    });
    });
});
