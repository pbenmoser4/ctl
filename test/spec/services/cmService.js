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
		expect(cmService.ws.options.apiroot).toEqual('https://api.cloudmine.me');
	});
});
