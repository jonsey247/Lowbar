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
    describe('#first', function() {
        it('is a function', function() {
            expect(_.first).to.be.a('function');
        });
    });
 });