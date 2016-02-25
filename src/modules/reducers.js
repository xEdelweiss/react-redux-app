import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import users from './users/reducers'

export default combineReducers({
    routing,
    users,
})