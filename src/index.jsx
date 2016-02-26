import 'babel-polyfill'
import React from 'react'                               // react
import {render} from 'react-dom'
import {Provider} from 'react-redux'                    // redux
import configureStore from './configureStore'
import {Router, browserHistory} from 'react-router'     // router
import {syncHistoryWithStore} from 'react-router-redux'
import rootRoute from './App'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history} routes={rootRoute} />
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}