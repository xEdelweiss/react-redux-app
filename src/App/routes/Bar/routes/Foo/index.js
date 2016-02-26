import Foo from './Foo'

import Home from './routes/Home'
import Bar from './routes/Bar'

export default {
    component: 'div',
    childRoutes: [{
        path: 'foo',
        component: Foo,
        indexRoute: Home,
        childRoutes: [
            Home,
            Bar,
        ]
    }]
}