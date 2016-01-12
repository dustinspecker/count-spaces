/* global describe, it */
'use strict'
import {end, start, total} from './lib/'
import {expect} from 'chai'

describe('count-spaces', () => {
  describe('end', () => {
    it('should not find any spaces', () => {
      expect(end('no_spaces')).to.eql(0)
    })

    it('should count ending spaces', () => {
      expect(end('some spaces  ')).to.eql(2)
    })

    it('should throw error when not given a string', () => {
      const testFunction = () => end(null)
      expect(testFunction).to.throw(TypeError, /Expected a string/)
    })
  })

  describe('start', () => {
    it('should not find any spaces', () => {
      expect(start('no_spaces')).to.eql(0)
    })

    it('should count beginning spaces', () => {
      expect(start('  start')).to.eql(2)
    })

    it('should throw error when not given a string', () => {
      const testFunction = () => start(null)
      expect(testFunction).to.throw(TypeError, /Expected a string/)
    })
  })

  describe('total', () => {
    it('should not find any spaces', () => {
      expect(total('no_spaces')).to.eql(0)
    })

    it('should count all spaces', () => {
      expect(total('  line of spaces ')).to.eql(5)
    })

    it('should throw error when not given a string', () => {
      const testFunction = () => total(null)
      expect(testFunction).to.throw(TypeError, /Expected a string/)
    })
  })
})
