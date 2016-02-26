import Bar from './Bar'

import Home from './routes/Home'
import Foo from './routes/Foo'

export default {
    component: 'div',
    childRoutes: [{
        path: 'bar',
        component: Bar,
        indexRoute: Home,
        childRoutes: [
            Home,
            Foo,
        ]
    }]
}