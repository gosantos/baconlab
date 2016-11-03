'use strict';

describe('Controller: PropcreateCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PropcreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PropcreateCtrl = $controller('PropcreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PropcreateCtrl.awesomeThings.length).toBe(3);
  });
});
