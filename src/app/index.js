import { makeNestedRoute } from 'utils'
import App from './App'

import Home from './routes/home'
import Bar from './routes/bar'
import Foo from './routes/foo'

export default makeNestedRoute('/', App, Home, [
    Home,
    Bar,
    Foo,
])