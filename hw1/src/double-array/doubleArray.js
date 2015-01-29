(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
    return arrayToDouble.map(function(x){
		return x * 2;
	};
  };

  module.exports = doubleArray;

})();
