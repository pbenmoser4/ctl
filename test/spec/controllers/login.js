'use strict';

describe('Controller: LoginController', function () {

  // load the controller's module
  beforeEach(module('ctlApp'));

  var LoginController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cmAuthService, cmService) {
    scope = $rootScope.$new();
    LoginController = $controller('LoginController', {
      $scope: scope
    });
  }));

  // Login tests

  it('should have a login function', function() {
    expect(typeof scope.login).toBe('function');
  });

  // Create user tests

  it('should have a createUser function', function() {
    expect(typeof scope.createUser).toBe('function');
  });

});
