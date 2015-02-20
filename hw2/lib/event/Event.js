(function () {
  'use strict';
  var Event = (function () {
    var handlers = [];
    var subscribe = function (func) {
      handlers.push(func);
    };
    var unsubscribe = function (func) {
      var i = 0;
      for (i; i < handlers.length; i++) {
        if (handlers[i] === func) {
          handlers[i] = undefined;
          break;
        }
      }
      while (i < handlers.length - 1) {
        handlers[i] = handlers[i + 1];
        handlers[i + 1] = undefined;
        i++;
      }
      if (i === handlers.length) {
        handlers.pop();
      }
    };
    var emit = function () {
      for (var i in handlers) {
        handlers[i](arguments);
      }
    };
    return {
      subscribe: subscribe,
      unsubscribe: unsubscribe,
      emit: emit
    };
  })();
})();
