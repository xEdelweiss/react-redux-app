import {createStore, applyMiddleware, compose} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer  = require('./reducers')
            store.replaceReducer(nextRootReducer )
        })
    }

    return store
}