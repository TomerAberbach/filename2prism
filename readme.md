<h1 align="center">
  filename2prism
</h1>

<div align="center">
  <a href="https://npmjs.org/package/filename2prism">
    <img src="https://badgen.net/npm/v/filename2prism" alt="version" />
  </a>
  <a href="https://github.com/TomerAberbach/filename2prism/actions">
    <img src="https://github.com/TomerAberbach/filename2prism/workflows/CI/badge.svg" alt="CI" />
  </a>
  <a href="https://unpkg.com/filename2prism/dist/index.min.js">
    <img src="https://deno.bundlejs.com/?q=filename2prism&badge" alt="gzip size" />
  </a>
  <a href="https://unpkg.com/filename2prism/dist/index.min.js">
    <img src="https://deno.bundlejs.com/?q=filename2prism&config={%22compression%22:{%22type%22:%22brotli%22}}&badge" alt="brotli size" />
  </a>
</div>

<div align="center">
  Converts source code filenames to PrismJS language aliases.
</div>

## Install

```sh
$ npm i filename2prism
```

## Usage

Map a filename to its associated
[PrismJS language aliases](https://prismjs.com/#supported-languages):

```js
import filename2prism from 'filename2prism'

console.log(filename2prism(`index.mjs`))
//=> ['javascript']

console.log(filename2prism(`spaghetti`))
//=> []

console.log(filename2prism(`.bash_history`))
//=> ['bash']

console.log(filename2prism(`file.d`))
//=> ['d', 'makefile']
```

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/filename2prism/issues/new).

## License

[MIT](https://github.com/TomerAberbach/filename2prism/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)
