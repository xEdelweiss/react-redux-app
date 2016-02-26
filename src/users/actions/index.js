import * as types from './types'

function loginSuccess(userName) {
    return {
        type: types.LOGIN_SUCCES,
        payload: userName
    }
}

function loginFail(errorMessage) {
    return {
        type: types.LOGIN_FAIL,
        error: true,
        payload: new Error(errorMessage)
    }
}

export function login() {

    return function(dispatch) {
        dispatch({
            type: types.LOGIN_REQUEST
        })

        setTimeout(() => {
            dispatch(
                Math.random() > 0.3
                    ? loginSuccess('Some Name')
                    : loginFail('Some error')
            )
        }, 1000)
    }

}