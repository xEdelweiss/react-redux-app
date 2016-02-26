import * as types from '../actions/types'

const initialState = {
    name: '',
    error: '',
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCES:
            return {
                ...state,
                name: action.payload,
                error: '',
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                error: action.payload.message,
            }
        default:
            return state
    }
}