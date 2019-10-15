import {CHANGE_LOADING, GET_WEATHER_DATA, GET_WEATHER_DATA_SUCCESS} from './types' 

export const changeLoading = (data) => {
    return {
        type: CHANGE_LOADING,
        payload: data
    }
}

export const clearWeatherData = () => {
    return {
        type: GET_WEATHER_DATA_SUCCESS,
        payload: null
    }
}

export const getWeatherData = (city, successCallback, failureCallback) => {
    return {
        type: GET_WEATHER_DATA,
        payload: {
            city,
            successCallback,
            failureCallback
        }
    }
}