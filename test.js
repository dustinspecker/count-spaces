/* global describe, it */
'use strict';
import {end, start, total} from './lib/';
import {expect} from 'chai';

describe('count-spaces', () => {
  describe('end', () => {
    it('should not find any spaces', () => {
      expect(end('no_spaces')).to.eql(0);
    });

    it('should count ending spaces', () => {
      expect(end('some spaces  ')).to.eql(2);
    });
  });

  describe('start', () => {
    it('should not find any spaces', () => {
      expect(start('no_spaces')).to.eql(0);
    });

    it('should count beginning spaces', () => {
      expect(start('  start')).to.eql(2);
    });
  });

  describe('total', () => {
    it('should not find any spaces', () => {
      expect(total('no_spaces')).to.eql(0);
    });

    it('should count all spaces', () => {
      expect(total('  line of spaces ')).to.eql(5);
    });
  });
});
