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

if (typeof module !== 'undefined') {
  module.exports = _;
}