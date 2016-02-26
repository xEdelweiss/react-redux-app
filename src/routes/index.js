import App from '../app/App'

import Home from './home'
import Bar from './bar'
import Foo from './foo'

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