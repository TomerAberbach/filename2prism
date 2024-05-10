import filename2prism from '../src/index.ts'

test.each([
  [`spaghetti`, []],
  [`linguini.asc`, [`asciidoc`]],
  [`.bash_history`, [`bash`]],
  [`file.d`, [`d`, `makefile`]],
])(`filename2prism - %p`, (input, expected) => {
  expect(new Set(filename2prism(input))).toStrictEqual(new Set(expected))
})
