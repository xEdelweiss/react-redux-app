import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'
import { App } from './app'
import { About } from './about'
import { Users, User } from './users'
import { NoMatch } from './noMatch'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

console.warn(Users)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <Route path='about' component={About}/>
                <Route path='users' component={Users}>
                    <Route path='/user/:userId' component={User}/>
                </Route>
                <Route path='*' component={NoMatch}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}