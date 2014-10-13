var version = require('./index.js');

describe('validate-version', function() {
  describe('validate()', function() {
    it('Should validate valid versions', function() {
      ['1.0.0', '0.0.0', '1.1.1', '0.3.123'].forEach(function(entry) {
        version.validate(entry).should.be.true;
      });
    });
    it('Should not validate invalid versions', function() {
      ['1.0.a', '1.1.1.1', 'a.1.1', '1.1.1-master'].forEach(function(entry) {
        version.validate(entry).should.be.false;
      });
    });
    it('Should validate valid extended versions', function() {
      ['1.1.1-master', '1.1.1'].forEach(function(entry) {
        version.validate(entry, true).should.be.true;
      });
    });
    it('Should not validate invalid extended versions', function() {
      ['1.1.1a-master', '1.1.1-master.test', '1.1-master', '1.1.1-', '1.1.1-@'].forEach(function(entry) {
        version.validate(entry, true).should.be.false;
      });
    });
  });
});
