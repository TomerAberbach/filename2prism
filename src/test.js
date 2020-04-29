import test from 'ava'
import filename2prism from '../lib/filename2prism'

const macro = (t, input, expected) => {
  t.deepEqual(new Set(filename2prism(input)), new Set(expected))
}

test(`no aliases for bad filename`, macro, 'spaghetti', [])

test(`one alias for unique extension`, macro, 'linguini.asc', [`asciidoc`])

test(`one alias for unique filename`, macro, `.bash_history`, [`bash`])

test(`many aliases for ambiguous extension`, macro, `file.d`, [`d`, `makefile`])
