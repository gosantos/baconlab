'use strict';

describe('Service: propservice', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var propservice;
  beforeEach(inject(function (_propservice_) {
    propservice = _propservice_;
  }));

  it('should do something', function () {
    expect(!!propservice).toBe(true);
  });

});
