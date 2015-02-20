(function () {
  'use strict';
  function FileFinder (pathToDirectory, ext) {
    var fs = require('fs'),
        path = require('path'),
        file = '',
        readData = '';
    var directoryFiles = fs.readdirSync(pathToDirectory);
    for (var i in directoryFiles) {
      if (path.extName(directoryFiles[i] === ext)) {
        file = directoryFiles[i];
        break;
      }
    }
    fs.readFile(file, function (err, data) {
      if (err) {
        console.error(err);
      }
      readData = data;
    });
    return readData;
  }
})();
