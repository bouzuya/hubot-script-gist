
{Promise} = require 'q'
request = require 'request'

class Gist
  constructor: (idOrUrl) ->
    @_id = @_parse idOrUrl

  fetch: ->
    url = @_apiUrl @_id
    new Promise (resolve, reject) ->
      request
        method: 'GET'
        url: url
        json: true
        headers:
          'User-Agent': 'gist'
      , (err, res) ->
        return reject(err) if err?
        files = res.body.files
        file = Object.keys(files)[0]
        resolve { file, content: files[file].content }

  _parse: (idOrUrl) ->
    match = idOrUrl.match /^https:\/\/gist.github.com\/(?:[^\/]+\/)?(.+)$/
    if match? then match[1] else idOrUrl

  _apiUrl: (id) ->
    "https://api.github.com/gists/#{id}"

module.exports.Gist = Gist
