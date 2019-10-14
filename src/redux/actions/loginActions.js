import {CHANGE_USERNAME, CHANGE_PASSWORD, CHANGE_LOADING, PERFORM_LOGIN} from './types' 

export const changeUsername = username => {
    return {
        type: CHANGE_USERNAME,
        payload: username
    }
}

export const changePassword = password => {
    return {
        type: CHANGE_PASSWORD,
        payload: password
    }
}

export const changeLoading = (data) => {
    return {
        type: CHANGE_LOADING,
        payload: data
    }
}

export const performLoginTask = (username, password, successCallback, failureCallback) => {
    return {
        type: PERFORM_LOGIN,
        payload: {
            username,
            password,
            successCallback,
            failureCallback
        }
    }
}