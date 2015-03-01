(function () {
  'use strict';
  var myModule = (function () {
    var name,
        dependencies = {},
        register,
        inject,
        getRegisteredFunc;
    register = function (name, func) {
      dependencies[name] = func;
    };
    inject = function (func) {
      //regex from angular source code
      var regex =/^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      var args = func.toString().match(regex)[1].replace(/ /g, '').split(',');
      var deps = [];
      for (var i = 0; i < args.length; i++) {
        deps.push(dependencies[args[i]]);
      }
      var a = func;
      var b = func.apply(a, deps);
      return b;
    };
    getRegisteredFunc = function () {
      var temp = [];
      for (var i in dependencies) {
        temp.push(dependencies[i]);
      }
      return temp.join(',');
    }
    var module = {
      name: name,
      dependencies: dependencies,
      register: register,
      inject: inject,
      getRegisteredFunc: getRegisteredFunc
    };
    return module;
  })();
  module.exports = {
    modules: {},
    module: function (name, dependencies) {
      myModule.name = name;
      if (dependencies.length === 0) {
        return myModule;
      }
      for (var i in dependencies) {
        myModule.dependencies = dependencies;
      }
      return myModule;
    }
  };
})();
