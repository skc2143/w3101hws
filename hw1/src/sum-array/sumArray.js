(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    // IMPLEMENT YOUR SOLUTION HERE!
    // MAKE SURE TO USE REDUCE!
	return values.reduce(function(x, y){
		return x + y;
	};
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
