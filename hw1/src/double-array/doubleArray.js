(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
    var doubled = arrayToDouble.map(function(x) {
		return x * 2;
	});
	return doubled;
  };

  module.exports = doubleArray;

})();
