var _ = {};
// identity
_.identity = function(x) {
    return x;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}