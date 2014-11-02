if (typeof window === 'undefined') {
  var clicktap = require('../'),
      assert = require('better-assert');
}

describe('clicktap', function () {
  it('should be defined', function () {
    assert(typeof clicktap === 'function');
  });

  it('should be defined "on" method', function () {
    assert(typeof clicktap.on === 'function');
  });

  it('should be defined "off" method', function () {
    assert(typeof clicktap.off === 'function');
  });
});