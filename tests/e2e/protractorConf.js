// protractorConf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
	'browserName': 'chrome'
    },

    specs: ['searchTest.js'],

    jasmineNodeOpts: {
	showColors: true,
    }
};
