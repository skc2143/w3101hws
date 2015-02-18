(function () {
  'use strict';
  function cache (someFunction) {
    var args;
    var result;
    return function (a, b) {
      if (args !== JSON.stringify(arguments)) {
        args = JSON.stringify(arguments);
        result = someFunction(a, b);
      }
      return result;
    };
  }
})();
