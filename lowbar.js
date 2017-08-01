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

if (typeof module !== 'undefined') {
  module.exports = _;
}