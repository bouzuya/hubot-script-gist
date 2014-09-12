# hubot-script-gist

A Hubot script that load hubot script from the gist url.

![](http://img.f.hatena.ne.jp/images/fotolife/b/bouzuya/20140912/20140912223349.gif)

## Installation

    $ npm install git://github.com/bouzuya/hubot-script-gist.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-script-gist.git#TAG'

## Example

    bouzuya> hubot help script-gist
      hubot> hubot script-gist - load hubot script from the gist url

    bouzuya> hubot script-gist https://gist.github.com/bouzuya/6031b428ea2d7ac03618
      hubot> gist url: https://gist.github.com/bouzuya/6031b428ea2d7ac03618
      hubot> load file: index.js
      hubot> loaded: https://gist.github.com/bouzuya/6031b428ea2d7ac03618

    bouzuya> hubot hello
      hubot> Hello, Gist!

## Configuration

See [`src/scripts/script-gist.coffee`](src/scripts/script-gist.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-script-gist
[travis-badge]: https://travis-ci.org/bouzuya/hubot-script-gist.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-script-gist
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-script-gist.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-script-gist
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-script-gist.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
