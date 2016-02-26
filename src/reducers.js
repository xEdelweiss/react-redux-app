import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import {userReducer} from './users'

export default combineReducers({
    routing,
    users: userReducer,
})