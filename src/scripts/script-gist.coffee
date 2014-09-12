# Description
#   A Hubot script that load hubot script from the gist url.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot script-gist <url or id> - load hubot script from the gist url
#
# Author:
#   bouzuya <m@bouzuya.net>
#
{Gist} = require '../gist'

tempfile = (extname) ->
  tmp = require 'tmp'
  {Promise} = require 'q'
  new Promise (resolve, reject) ->
    tmp.file postfix: extname, (err, path) ->
      return reject(err) if err?
      resolve(path)

load = (robot, file, content) ->
  fs = require 'fs'
  path = require 'path'
  tempfile(path.basename(file)).then (tmp) ->
    fs.writeFileSync tmp, content, encoding: 'utf-8'
    robot.loadFile path.dirname(tmp), path.basename(tmp)

module.exports = (robot) ->
  robot.respond /script-gist\s+(\S+)\s*$/i, (res) ->
    idOrUrl = res.match[1]
    res.send "gist url: #{idOrUrl}"
    gist = new Gist(idOrUrl)
    gist
      .fetch()
      .then ({ file, content }) ->
        res.send "load file: #{file}"
        load robot, file, content
      .then ->
        res.send 'loaded: ' + idOrUrl
