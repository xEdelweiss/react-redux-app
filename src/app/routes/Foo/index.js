import { makeRoute } from 'utils'
import Foo from './Foo'

export default makeRoute('foo(/:name)', Foo)