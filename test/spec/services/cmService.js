'use strict';


describe('Service: cmService', function () {

	var cmService;

	// load the service's module
 	beforeEach(module('ctlApp'));

	// Initialize the service
	beforeEach(inject(function(_cmService_) {
		cmService = _cmService_;
	}));

	it('should instantiate a WebService object with https://api.cloudmine.me as its apiroot', function(){
		expect(cmService.cmWebService.options.apiroot).toEqual('https://api.cloudmine.me');
	});

	// it('should create an object successfully with no options passed', function() {
	// 	var itemToCreate = {name: 'ben', location: 'PHL'};
	// 	cmService.create(itemToCreate, {}, 
	// 		function(successData) {
	// 			console.log(JSON.stringify(successData, null, 2));
	// 			expect(typeof successData).toBe(null);
	// 		},
	// 		function(error) {
	// 			console.log(JSON.stringify(error, null, 2));
	// 			expect(typeof error).toBe(null);
	// 		});
	// });
});
