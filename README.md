# filename2prism

[![NPM version](https://img.shields.io/npm/v/filename2prism.svg)](https://www.npmjs.com/package/filename2prism) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Converts source code filenames to PrismJS language aliases.

## Install

Install with [npm](https://www.npmjs.com):

```sh
$ npm i filename2prism --save
```

## Usage

The following reads a directory of source code files, highlights them according to their filenames, and then outputs the results to another directory:

```js
const path = require('path')
const fs = require('fs')

const filename2prism = require('filename2prism')
const prism = require('prismjs')
require('prismjs/components/')() // Loads all languages

const src = 'path/to/some/src/dir'
const out = 'path/to/some/out/dir'

fs.readdirSync(src)
  .filter(name => fs.statSync(path.join(src, name)).isFile())
  .forEach(name => {
    let alias = filename2prism(name)

    if (typeof alias === 'undefined') {
      throw new Error('No matching language found from filename!')
    }

    if (Array.isArray(alias)) {
      // Multiple matches found, picked first one for simplicity
      alias = alias[0]
    } // else one match was found

    fs.writeFileSync(
      path.join(out, name),
      prism.highlight(
        fs.readFileSync(path.join(src, name)).toString(),
        prism.languages[alias],
        alias
      )
    )
  })
```

## Method

`filename2prism(filename) -> string | Array<string> | undefined`

Returns a PrismJS language alias from a filename. A `string` is returned if there was one match, an `Array<string>` is returned if there were multiple matches, and `undefined` is returned if there was no match.

Parameters:
 * `filename` : `string` - The filename to infer a PrismJS alias from.

## Related

 * [prismjs](https://www.npmjs.com/package/prismjs)
 * [src2img](https://www.npmjs.com/package/src2img)
 * [src2img-cli](https://www.npmjs.com/package/src2img-cli)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/TomerAberbach/filename2prism/issues/new).

## Running Tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Author

**Tomer Aberbach**

* [Github](https://github.com/TomerAberbach)
* [NPM](https://www.npmjs.com/~tomeraberbach)
* [LinkedIn](https://www.linkedin.com/in/tomer-a)
* [Website](https://tomeraberba.ch)

## License

Copyright © 2018 [Tomer Aberbach](https://github.com/TomerAberbach)
Released under the [MIT license](https://github.com/TomerAberbach/filename2prism/blob/master/LICENSE).
