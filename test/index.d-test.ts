import { expectType } from 'tsd'
import filename2prism from '../src'

expectType<Array<string>>(filename2prism('index.mjs'))
