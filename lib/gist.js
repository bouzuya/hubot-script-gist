var Gist, Promise, request;

Promise = require('q').Promise;

request = require('request');

Gist = (function() {
  function Gist(idOrUrl) {
    this._id = this._parse(idOrUrl);
  }

  Gist.prototype.fetch = function() {
    var url;
    url = this._apiUrl(this._id);
    return new Promise(function(resolve, reject) {
      return request({
        method: 'GET',
        url: url,
        json: true,
        headers: {
          'User-Agent': 'gist'
        }
      }, function(err, res) {
        var file, files;
        if (err != null) {
          return reject(err);
        }
        files = res.body.files;
        file = Object.keys(files)[0];
        return resolve({
          file: file,
          content: files[file].content
        });
      });
    });
  };

  Gist.prototype._parse = function(idOrUrl) {
    var match;
    match = idOrUrl.match(/^https:\/\/gist.github.com\/(?:[^\/]+\/)?(.+)$/);
    if (match != null) {
      return match[1];
    } else {
      return idOrUrl;
    }
  };

  Gist.prototype._apiUrl = function(id) {
    return "https://api.github.com/gists/" + id;
  };

  return Gist;

})();

module.exports.Gist = Gist;
