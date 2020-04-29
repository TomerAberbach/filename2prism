# filename2prism

[![NPM version](https://img.shields.io/npm/v/filename2prism.svg)](https://www.npmjs.com/package/filename2prism) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Converts source code filenames to PrismJS language aliases.

## Install

```sh
$ npm i filename2prism
```

## Usage

Map a file extension to its associated [PrismJS language aliases](https://prismjs.com/#supported-languages):

```js
import filename2prism from 'filename2prism'

console.log(filename2prism('index.mjs'))
//=> ['javascript']

console.log(filename2prism('spaghetti'))
//=> []

console.log(filename2prism('.bash_history'))
//=> ['bash']

console.log(filename2prism('file.d'))
//=> ['d', 'makefile']
```

## Related

- [prismjs](https://www.npmjs.com/package/prismjs)
- [src2img](https://www.npmjs.com/package/src2img)
- [src2img-cli](https://www.npmjs.com/package/src2img-cli)

## License

[MIT](https://github.com/TomerAberbach/filename2prism/blob/master/license) © [Tomer Aberbach](https://github.com/TomerAberbach)
