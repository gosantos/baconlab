'use strict';

describe('Controller: NodescreateCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NodescreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NodescreateCtrl = $controller('NodescreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NodescreateCtrl.awesomeThings.length).toBe(3);
  });
});
