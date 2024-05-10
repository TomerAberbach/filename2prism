import { basename, extname } from 'node:path'
import languages from './languages.ts'

const filename2prism = (filename: string): string[] => [
  ...(filenames[basename(filename)] ?? []),
  ...(extnames[extname(filename).slice(1)] ?? []),
]

const filenames: Record<string, string[]> = {}
const extnames: Record<string, string[]> = {}
for (const [alias, associations] of Object.entries(languages)) {
  for (const filename of associations.filenames) {
    let values = filenames[filename]
    if (!values) {
      values = []
      filenames[filename] = values
    }
    values.push(alias)
  }

  for (const extname of associations.extnames) {
    let values = extnames[extname]
    if (!values) {
      values = []
      extnames[extname] = values
    }
    values.push(alias)
  }
}

export default filename2prism
