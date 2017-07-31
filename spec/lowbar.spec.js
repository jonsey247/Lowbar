/* global describe, it */
var path = require('path');
var expect = require('chai').expect;


var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
    'use strict';

    it('is an object', function () {
        expect(_).to.be.an('object');
    });

    describe('#identity', function () {
        it('is a function', function () {
            expect(_.identity).to.be.a('function');
        });
        it('should return the same data type', function () {
            var result = _.identity([1, 2, 3]);
            expect(Array.isArray(result)).to.equal(true);
            var nums = _.identity(4567);
            expect(Number.isInteger(nums)).to.equal(true);
            var str = _.identity('hello world!');
            expect(typeof str).to.be.a('string');
            var undef = _.identity(undefined);
            expect(undef).to.be.a('undefined');
            var boolean = _.identity(true);
            expect(boolean).to.be.a('boolean');
            var nul = _.identity(null);
            expect(nul).to.be.a('null');
        });

        it('should return the given value', function () {
            var result = _.identity(5);
            expect(result).to.equal(5);
        });
    });

    // first
    describe('#first', function () {
        it('is a function', function () {
            expect(_.first).to.be.a('function');
        });
        it('should return the first element in an array if no n parameter present', function () {
            var result = _.first([1, 2, 3]);
            expect(result).to.equal(1);
        });

        it('should return the first  n elements in an array if n parameter present', function () {
            var result = _.first([1, 2, 3], 2);
            expect(result).to.eql([1, 2]);
        });

        it('should return an array if n parameter is present', function () {
            var result = _.first([4, 5, 6], 2);
            expect(result).to.eql([4, 5]);
        });

        it('should return the array if n is greater than the length of the array', function () {
            var result = _.first([1, 2, 3, 4], 7);
            expect(result).to.eql([1, 2, 3, 4]);
        });

        it('should receive an array', function () {
            var result = _.first([1, 2, 3, 4]);
            expect(result).to.equal(1);
        });
    });

    // last
  describe('#last', function() {
    it('is a function', function() {
      expect(_.last).to.be.a('function');
    });

    it('should return the last element in an array if no n parameter present', function() {
      var result = _.last([1, 2, 3]);
      expect(result).to.equal(3);
    });

    it('should return the last  n elements in an array if n parameter present', function() {
      var result = _.last([1, 2, 3],2);
      expect(result).to.eql([2,3]);
    });

    it('should return an array if n parameter is present', function() {
      var result = _.last([4, 5, 6],2);
      expect(result).to.eql([5,6]);
    });

    it('should return the array if n is greater than the length of the array',function() {
      var result = _.last([1, 2, 3, 4],7);
      expect(result).to.eql([1, 2, 3, 4]);
    });

    it('should receive an array', function() {
      var result = _.last([1, 2, 3, 4]);
      expect(result).to.equal(4);
    });
  });

  // each
  describe('#each', function() {
    it('is a function', function() {
      expect(_.each).to.be.a('function');
    });

    it('should iterate through every item in the list', function() {
      var count = 0;
      function incrementCount() {
        count++;
      }
      _.each([1,2,3,4,5], incrementCount);
      expect(count).to.equal(5);
    });
  });
});