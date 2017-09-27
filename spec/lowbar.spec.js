/* global describe, it */
var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon');

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
            var input = [1, 2, 3];
            expect(_.identity(input)).to.equal(input);
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
    });

    // last
    describe('#last', function () {
        it('is a function', function () {
            expect(_.last).to.be.a('function');
        });

        it('should return the last element in an array if no n parameter present', function () {
            var result = _.last([1, 2, 3]);
            expect(result).to.equal(3);
        });

        it('should return the last  n elements in an array if n parameter present', function () {
            var result = _.last([1, 2, 3], 2);
            expect(result).to.eql([2, 3]);
        });

        it('should return an array if n parameter is present', function () {
            var result = _.last([4, 5, 6], 2);
            expect(result).to.eql([5, 6]);
        });

        it('should return the array if n is greater than the length of the array', function () {
            var result = _.last([1, 2, 3, 4], 7);
            expect(result).to.eql([1, 2, 3, 4]);
        });
    });

    // each
    describe('#each', function () {
        it('is a function', function () {
            expect(_.each).to.be.a('function');
        });

        it('should iterate through every item an array', function () {
            var count = 0;

            function incrementCount() {
                count++;
            }
            _.each([1, 2, 3, 4, 5], incrementCount);
            expect(count).to.equal(5);
        });
        it('should iterate through every item an object', function () {
            var count = 0;

            function incrementCount() {
                count++;
            }
            _.each({'a':1, 'b':2, 'c':3, 'd':4, 'e':5}, incrementCount);
            expect(count).to.equal(5);
        });
    });

    // indexOf
    describe.only('#indexOf', function () {
        it('is a function', function () {
            expect(_.indexOf).to.be.a('function');
        });

        it('should return a number', function () {
            var result = _.indexOf([1, 2, 3]);
            expect(result).to.be.a('number');
        });

        it('should return the index of the given value within the array', function () {
            var result = _.indexOf([1, 2, 3], 2);
            expect(result).to.equal(1);
        });

        it('should return the index of the given value starting at a given index within the array', function () {
            var result = _.indexOf([1, 2, 3, 4, 5, 6, 7], 6, 2);
            expect(result).to.equal(3);
        });
    });

    // filter
    describe('#filter', function () {
        it('is a function', function () {
            expect(_.filter).to.be.a('function');
        });

        it('should return a list filtered by the predicate', function () {
            var result = _.filter([1, 2, 3, 4, 5, 6], function (num) {
                return num % 2 === 0;
            });
            expect(result).to.eql([2, 4, 6]);
            var result2 = _.filter({
                a: 1,
                b: 2,
                c: 3,
                d: 4,
                e: 5,
                f: 6
            }, function (num) {
                return num % 2 === 0;
            });
            expect(result2).to.eql([2, 4, 6]);
        });
    });

    // reject
    describe('#reject', function () {
        it('is a function', function () {
            expect(_.reject).to.be.a('function');
        });

        it('should return a list filtered by the predicate', function () {
            var result = _.reject([1, 2, 3, 4, 5, 6], function (num) {
                return num % 2 === 0;
            });
            expect(result).to.eql([1, 3, 5]);
            var result2 = _.reject({
                a: 1,
                b: 2,
                c: 3,
                d: 4,
                e: 5,
                f: 6
            }, function (num) {
                return num % 2 === 0;
            });
            expect(result2).to.eql([1, 3, 5]);
        });
    });

    // uniq
    describe('#uniq', function () {
        it('is a function', function () {
            expect(_.uniq).to.be.a('function');
        });

        it('returns an array of unique values', function () {
            var result = _.uniq([1, 2, 1, 4, 1, 3]);
            expect(result).to.eql([1, 2, 4, 3]);
        });
    });

    // map
    describe('#map', function () {
        it('is a function', function () {
            expect(_.map).to.be.a('function');
        });

        it('returns a mapped array', function () {
            expect(_.map([1, 2, 3], function (num) {
                return num * 3;
            })).to.eql([3, 6, 9]);
            expect(_.map({
                one: 1,
                two: 2,
                three: 3
            }, function (num) {
                return num * 3;
            })).to.eql([3, 6, 9]);
        });
    });

    // contains
    describe('#contains', function () {
        it('is a function', function () {
            expect(_.contains).to.be.a('function');
        });

        it('should return true for contains([1,2,3], 3)', function () {
            expect(_.contains([1, 2, 3], 3)).to.equal(true);
        });

        it('should return false for ([4,5,6], 7)', function () {
            expect(_.contains([4, 5, 6], 7)).to.equal(false);
        });

        it('should start searching at the index provided as the third argument', function () {
            it('should return false for ([1,2,3], 1, 1)', function () {
                expect(_.contains([1, 2, 3], 1, 1)).to.equal(false);
            });

            it('should return true for contains([1,2,3,1], 1, 2)', function () {
                expect(_.contains([1, 2, 3, 1], 1, 2)).to.equal(true);
            });
        });
    });

    // pluck
    describe('#pluck', function () {
        it('is a function', function () {
            expect(_.pluck).to.be.a('function');
        });

        it('returns an array of extracted values', function () {
            var stooges = [{
                name: 'moe',
                age: 40
            }, {
                name: 'larry',
                age: 50
            }, {
                name: 'curly',
                age: 60
            }];
            expect(_.pluck(stooges, 'name')).to.eql(['moe', 'larry', 'curly']);
        });
    });

    // reduce
    describe('#reduce', function () {
        it('is a function', function () {
            expect(_.reduce).to.be.a('function');
        });

        it('reduces a list to a single value', function () {
            expect(_.reduce([1, 2, 3], function (memo, num) {
                return memo + num;
            }, 0)).to.equal(6);
        });
    });

    // every
    describe('#every', function () {
        it('is a function', function () {
            expect(_.every).to.be.a('function');
        });

        it('returns false if not all list values pass the predicate test', function () {
            expect(_.every([2, 4, 5], function (num) {
                return num % 2 == 0;
            })).to.equal(false);
        });

        it('returns true if all list values pass the predicate test', function () {
            expect(_.every([2, 4], function (num) {
                return num % 2 == 0;
            })).to.equal(true);
        });
    });

    // some
    describe('#some', function () {
        it('is a function', function () {
            expect(_.some).to.be.a('function');
        });

        it('returns true if some list values pass the predicate test', function () {
            expect(_.some([2, 4, 5], function (num) {
                return num % 2 == 0;
            })).to.equal(true);
        });

        it('returns false if none of the list values pass the predicate test', function () {
            expect(_.some([1, 3, 5], function (num) {
                return num % 2 == 0;
            })).to.equal(false);
        });
    });

    // extend
    describe('#extend', function () {
        it('is a function', function () {
            expect(_.extend).to.be.a('function');
        });

        it('copies properties from the source object into the destination object', function () {
            expect(_.extend({
                name: 'steve'
            }, {
                age: 20
            })).to.eql({
                name: 'steve',
                age: 20
            });
        });
    });

    // defaults
    describe('#defaults', function () {
        it('is a function', function () {
            expect(_.defaults).to.be.a('function');
        });

        it('fills in properties in object with values from defaults', function () {
            var iceCream = {
                flavor: 'chocolate'
            };
            expect(_.defaults(iceCream, {
                flavor: 'vanilla',
                sprinkles: 'lots'
            })).to.eql({
                flavor: 'chocolate',
                sprinkles: 'lots'
            });
        });
    });

    // once
    describe('#once', function () {
        it('is a function', function () {
            expect(_.once).to.be.a('function');
        });
        it('should call only once', function () {
            var spy = sinon.spy();
            var limitTest = _.once(spy);
            limitTest();
            limitTest();
            limitTest();
            expect(spy.callCount).to.equal(1);
        });
    });

    // memoize
    describe('#memoize', function () {
        it('is a function', function () {
            expect(_.memoize).to.be.a('function');
        });

        it('returns same value as original funcion', function () {
            var double = function (n) {
                return 2 * n;
            };
            var spy = sinon.spy(double);
            var memDouble = _.memoize(spy);
            memDouble(5);
            memDouble(5);
            memDouble(5);
            expect(spy.callCount).to.equal(1);
        });

        it('the returned function should have a cache prop', function () {
            var double = function (n) {
                return 2 * n;
            };
            var memDouble = _.memoize(double);
            memDouble(3);
            expect(memDouble.cache).to.eql({
                '3': 6
            });
        });
    });

    // shuffle
    describe('#shuffle', function () {
        it('is a function', function () {
            expect(_.shuffle).to.be.a('function');
        });

        it('returns a shuffled copy of the array', function () {
            expect(_.shuffle([1, 2, 3, 4, 5, 6])).to.not.eql([1, 2, 3, 4, 5, 6]);
        });
    });

    // invoke
    describe('#invoke', function () {
        it('is a function', function () {
            expect(_.invoke).to.be.a('function');
        });

        it('calls the method on each list value', function () {
            expect(_.invoke([
                [5, 1, 7],
                [3, 2, 1]
            ], 'sort')).to.eql([
                [1, 5, 7],
                [1, 2, 3]
            ]);
        });
    });

    // sortBy
    describe('#sortBy', function () {
        it('is a function', function () {
            expect(_.sortBy).to.be.a('function');
        });

        it('returns a list sorted by function', function () {
            expect(_.sortBy([1, 2, 3, 4, 5, 6], function (num) {
                return Math.sin(num);
            })).to.eql([5, 4, 6, 3, 1, 2]);
        });
    });

    // zip
    describe('#zip', function () {
        it('is a function', function () {
            expect(_.zip).to.be.a('function');
        });

        it('zips together two arrays with elements of the same index paired together', function () {
            expect(_.zip(['a', 'b', 'c', 'd'], [1, 2, 3])).to.eql([
                ['a', 1],
                ['b', 2],
                ['c', 3],
                ['d', undefined]
            ]);
        });
    });

    // sortedIndex
    describe('#sortedIndex', function () {
        it('is a function', function () {
            expect(_.sortedIndex).to.be.a('function');
        });

        it(' determine the index at which the value should be inserted into the list in order to maintain the list\'s sorted order', function () {
            expect(_.sortedIndex([10, 20, 30, 40, 50], 35)).to.equal(3);
        });
    });

    // flatten
    describe('#flatten', function () {
        it('is a function', function () {
            expect(_.flatten).to.be.a('function');
        });

        it('returns a flattened array', function () {
            expect(_.flatten([1, [2],
                [3, [
                    [4]
                ]]
            ])).to.eql([1, 2, 3, 4]);
        });
    });

    // intersection
    describe('#intersection', function () {
        it('is a function', function () {
            expect(_.intersection).to.be.a('function');
        });

        it('returns the intersection of all arrays passed', function () {
            expect(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])).to.eql([1, 2]);
        });
    });

    // difference
    describe('#difference', function () {
        it('is a function', function () {
            expect(_.difference).to.be.a('function');
        });

        it('returns the values from the first array that are not present in the other arrays', function () {
            expect(_.difference([1, 2, 3, 4, 5], [5, 2, 10])).to.eql([1, 3, 4]);
        });
    });

    // Binary indexOf
    describe('#binaryIndexOf', function () {
        it('is a function', function () {
            expect(_.binaryIndexOf).to.be.a('function');
        });
        var test1 = _.binaryIndexOf.call([1, 2, 3], 2);
        var test2 = _.binaryIndexOf.call([1, 2, 3], 3);
        it('returns the values from array that are not present in the other arrays.', function () {
            expect(test1).to.eql(1);
            expect(test2).to.eql(2);
        });
        it('should return -1 if the value is not present in the array', function () {
            expect(_.indexOf([1, 2, 3], 52)).to.eql(-1);
        });
    });

    // throttle
    // describe('#throttle', function () {
    //     it('is a function', function () {
    //         expect(_.throttle).to.be.a('function');
    //     });

    //     it('should execute after delay', function () {
    //         var hasHappened = false;
    //         runs(function () {
    //             var fn = underscore.debounce(function () {
    //                 hasHappened = true;
    //             }, 100);

    //             fn();
    //         });
    //     });

    //     it('should work', function () {
    //         var hello = function () {
    //             console.log('hello');
    //         };
    //         var func = _.throttle(hello, 1000);
    //         func();                     // should be called
    //         setTimeout(func, 500);      // should not be called
    //         setTimeout(func, 1000);     // should be called
    //         setTimeout(func, 1500);     // should not be called
    //         setTimeout(func, 1900);     // should not be called
    //         // expect(setTimeout(func, 500)).to.equal('hello')
    //     });
    // });
});