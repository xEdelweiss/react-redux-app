import App from './App'

import Home from './routes/Home'
import About from './routes/About'

export default {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: App,
        indexRoute: Home,
        childRoutes: [
            Home,
            About,
        ]
    }]
}