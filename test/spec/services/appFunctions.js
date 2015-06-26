'use strict';


describe('Service: appFunctions', function () {

	var appFunctions;

	// load the service's module
 	beforeEach(module('ctlApp'));

	// Initialize the service
	beforeEach(inject(function(_appFunctions_) {
		appFunctions = _appFunctions_;
	}));

	it('should capitalize a single string', function() {
		var str = 'string';
		var capString = appFunctions.capitalizeString(str);
		expect(capString).toBe('String');
	});

	it('should trim whitespace when capitalizing single strings', function() {
		var str = '     string   ';
		var capString = appFunctions.capitalizeString(str);
		expect(capString).toBe('String');
	});

	it('should capitalize an array of strings', function() {
		var arr = ['hi', '-there', ' Friend   '];
		var capString = appFunctions.capitalizeStrArray(arr);
		expect(capString).toBe('Hi -there Friend');
	});
});
