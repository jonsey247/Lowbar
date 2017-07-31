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

if (typeof module !== 'undefined') {
  module.exports = _;
}