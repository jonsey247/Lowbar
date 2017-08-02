var _ = {};
// identity
_.identity = function(x) {
    return x;
};

// first
_.first = function(array, num) {
    if (num === undefined) {
        return array[0];
    } else {
        return array.slice(0, num);
    }
};

// last
_.last = function(array,num) {
  if (num === undefined) {
    return array[array.length - 1];
  }
  if (array.length < num) {
    return array;
  }
  else {
    return array.slice(array.length - num,array.length);
  }
};

// each
_.each = function(list, func) {
  for (var key in list) {
    func(list[key]);
  }
};

// indexOf
_.indexOf = function(array, value, isSorted) {
  if (isSorted === undefined) {
    return array.indexOf(value); 
  } else {
    var sliced = array.slice(isSorted, array.length);
    return sliced.indexOf(value);
  }
};

// filter
_.filter = function(list, predicate) {
  var result = [];
  for (var key in list) {
    if (predicate(list[key])) {
      result.push(list[key]);
    }
  } return result;
};

// reject 
_.reject = function(list, predicate) {
  var result = [];
  for (var key in list) {
    if (!predicate(list[key])) {
      result.push(list[key]);
    }
  } return result;
};

// uniq
_.uniq = function(list) {
  var result = [];
  for (let i = 0; i < list.length; i++) {
    if (result.indexOf(list[i]) === -1) {
      result.push(list[i]);
    }
  }
  return result;
};

// map
_.map = function(list, iteratee) {
  var result = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      result.push(iteratee(list[i]));
    }
  } else {
    for (let key in list) {
      result.push(iteratee(list[key]));
    }
  }
  return result;
};

// contains
_.contains = function(array, target, fromIndex) {
  var slice = array.slice(fromIndex);
  if (slice.indexOf(target) !== -1) {
    return true;
  } else {
    return false;
  }
};

// pluck
_.pluck = function(list, propertyName) {
  var result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i][propertyName]);
  }
  return result;
};

// reduce
_.reduce = function(list, iteratee, memo) {
  for (let i = 0; i < list.length; i++) {
    memo = iteratee(memo, list[i]);
  }
  return memo;
};

// every
_.every = function(list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) {
      return false;
    }
  }
  return true;
};

// some
_.some = function(list, predicate) {
    for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return true;
    }
  }
  return false;
};

// extend
_.extend = function(destination, source) {
  return Object.assign({}, destination, source);
};

// defaults
_.defaults = function(object, defaults) {
  return Object.assign({}, defaults, object);
};

// ADVANCED LOWBAR

// once
_.once = function (arg) {
    var called = false;
    return function () {
        if (called === false) {
            called = true;
            return arg.apply(null, arguments);
        } 
    };
};

// memoize
_.memoize = function (fn, hashFunction) {
    var cache = {};
    var newFunc = function (key) {
        var finalKey = hashFunction ? hashFunction.apply(null, arguments) : key;
        if (!(finalKey in cache)) {
            cache[finalKey] = fn.apply(null,arguments);
    }
        return cache[finalKey]; 
    };
    newFunc.cache = cache;
    return newFunc;
};

// shuffle
_.shuffle = function (list) {
    var arrayCopy = Array.prototype.slice.call(list);

    var results = [];

    for (var i = 0; i < list.length; i++) {
      var random = Math.floor(Math.random() * arrayCopy.length);
      results.push(arrayCopy[random]);
      arrayCopy.splice(random,1);
    }

    return results;
};

// invoke
_.invoke = function (list, methodName) {
    var args = [].slice.call(arguments, 2);
    return list.map(function (ele) {
        return ele[methodName] ? ele[methodName].apply(ele, args) : undefined;
    });
};

// sortBy
_.sortBy = function (list, iteratee) {
    if (typeof(iteratee) === 'function') {
      return list.sort(function(a,b) {return iteratee(a) - iteratee(b);});
    } else {
      return list.sort(function(a,b) {return a[iteratee] - b[iteratee];});
  }
};

// zip
_.zip = function () {
  var argumentsArray = Array.prototype.slice.call(arguments);
  var longestArray = argumentsArray.sort(function(a, b) {
    return b.length - a.length;
  })[0];

  return longestArray.map(function(value, index) {
    return argumentsArray.map(function(val) {
      return val[index];
    });
  });
};

// sortedIndex
/* _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = (iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; 
      else high = mid;
    }
    return low;
  }; */

  // flatten
_.flatten = function (list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      var temp = _.flatten(list[i]);
      temp.forEach(function(value) { result.push(value); });
    } else {
      result.push(list[i]);
    }
  }
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}