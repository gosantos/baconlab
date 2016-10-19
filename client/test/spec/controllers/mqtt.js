'use strict';

describe('Controller: MqttCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MqttCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MqttCtrl = $controller('MqttCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MqttCtrl.awesomeThings.length).toBe(3);
  });
});
