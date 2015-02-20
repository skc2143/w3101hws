(function () {
  'use strict';
  var CsvParser = require('./CsvParser'),
      FileFinder = require('./FileFinder'),
      input = '"some","set","of","comma separated values"\n"using"' +
            ',"newline","as","row delimiter"';
  var csv = new CsvParser(input);
  console.log(csv.csv);
  var cells = [
    {row: 0, col: 1},
    {row: 1, col: 0}
  ];
  console.log(csv.compute(cells, concat));
  function concat (a, b) {
    return a + b;
  }
  var file = new FileFinder('./', '.csv');
  csv = new CsvParser(file);
  console.log(csv.csv);
})();
