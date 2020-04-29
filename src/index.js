import path from 'path'
import languages from './languages'

const filenames = {}
const extnames = {}

const has = (o, property) => Object.prototype.hasOwnProperty.call(o, property)

for (const [alias, associations] of Object.entries(languages)) {
  for (const filename of associations.filenames) {
    if (!has(filenames, filename)) {
      filenames[filename] = []
    }

    filenames[filename].push(alias)
  }

  for (const extname of associations.extnames) {
    if (!has(extnames, extname)) {
      extnames[extname] = []
    }

    extnames[extname].push(alias)
  }
}

const filename2prism = filename =>
  []
    .concat(
      filenames[path.basename(filename)],
      extnames[path.extname(filename).substring(1)]
    )
    .filter(Boolean)

export default filename2prism
