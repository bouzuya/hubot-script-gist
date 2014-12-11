var Gist, load, tempfile;

Gist = require('../gist').Gist;

tempfile = function(extname) {
  var Promise, tmp;
  tmp = require('tmp');
  Promise = require('q').Promise;
  return new Promise(function(resolve, reject) {
    return tmp.file({
      postfix: extname
    }, function(err, path) {
      if (err != null) {
        return reject(err);
      }
      return resolve(path);
    });
  });
};

load = function(robot, file, content) {
  var fs, path;
  fs = require('fs');
  path = require('path');
  return tempfile(path.basename(file)).then(function(tmp) {
    fs.writeFileSync(tmp, content, {
      encoding: 'utf-8'
    });
    return robot.loadFile(path.dirname(tmp), path.basename(tmp));
  });
};

module.exports = function(robot) {
  return robot.respond(/script-gist\s+(\S+)\s*$/i, function(res) {
    var gist, idOrUrl;
    idOrUrl = res.match[1];
    res.send("gist url: " + idOrUrl);
    gist = new Gist(idOrUrl);
    return gist.fetch().then(function(_arg) {
      var content, file;
      file = _arg.file, content = _arg.content;
      res.send("load file: " + file);
      return load(robot, file, content);
    }).then(function() {
      return res.send('loaded: ' + idOrUrl);
    });
  });
};
