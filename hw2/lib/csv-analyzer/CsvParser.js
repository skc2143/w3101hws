(function () {
  'use strict';
  var arr;
  function CsvParser(str) {
    var temp = str.split('\n');
    var arr = [],
        i = 0;
    for (i; i<temp.length; i++) {
      arr.push(temp[i].split(','));
    }
  }
  CsvParser.prototype.csv = arr;
  CsvParser.prototype.compute = function(cells, func) {
    return func(cells.row, cells.col);
  };
  return CsvParser;
})();
