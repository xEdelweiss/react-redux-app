import App from './App'

import Home from './routes/Home'
import Bar from './routes/Bar'
import Foo from './routes/Foo'

export default {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: App,
        indexRoute: Home,
        childRoutes: [
            Home,
            Bar,
            Foo,
        ]
    }]
}