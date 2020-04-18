'use strict';

const { expect } = require('chai');
const sizeOnDisk = require('../../');

describe('size-on-disk', () => {
  describe('smoketests', () => {
    it('is a function', () => {
      expect(sizeOnDisk).to.be.a('function');
    });
    it('throws an error sans path', () => {
      expect(sizeOnDisk).to.throw('MissingPath: path is a required parameter');
    });
    it('throws an error on missing path', () => {
      const t = () => { sizeOnDisk('thispathdoesntexist'); };
      expect(t).to.throw('PathDoesNotExist: thispathdoesntexist');
    });
  });

  describe('it works', () => {
    it('on a file', () => {
      const size = sizeOnDisk('./test/stub/output.bsf');
      expect(size).to.equal(200234);
    });

    it('on a directory', () => {
      const size = sizeOnDisk('./test/stub/a');
      expect(size).to.equal(2082660);
    });
  });
});
