(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
	BallFollower.prototype.swap = function() {
		if (swaps.isArray) {
			swaps.foreach(function(a) {
				if (a.isArray) {
					if (a[0] !== start && a[0] !== start) {
						return start;
					} else if (a[0] !== start) {
						return a[0];
					} else {
						return a[1];
					}
				} else {
					if (a !== start) {
						return a;
					} else {
						return start;
					}
				}
			});
		}
		return start;
	};
  };

  module.exports = BallFollower; // DON'T ALTER THIS
})();
