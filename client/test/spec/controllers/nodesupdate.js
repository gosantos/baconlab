'use strict';

describe('Controller: NodesupdateCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NodesupdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NodesupdateCtrl = $controller('NodesupdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NodesupdateCtrl.awesomeThings.length).toBe(3);
  });
});
