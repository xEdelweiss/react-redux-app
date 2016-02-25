import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../modules/reducers'

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    )

    if (module.hot) {
        module.hot.accept('../modules/reducers', () => {
            const nextRootReducer  = require('../modules/reducers')
            store.replaceReducer(nextRootReducer )
        })
    }

    return store
}