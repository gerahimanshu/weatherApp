import { put, takeLatest } from 'redux-saga/effects'
import {GET_WEATHER_DATA, GET_WEATHER_DATA_SUCCESS, GET_WEATHER_DATA_FAILURE, CHANGE_LOADING} from '../actions/types';
import {Utils} from '../../utils';

function* getWeatherData(action) {
    const {city, successCallback, failureCallback} = action.payload; 
    try {
        yield put({type: CHANGE_LOADING, payload: true})
        if(city === ''){
            throw {
                message: 'City is required!'
            }
        }
        const weatherData = yield fetchWeatherData(Utils.constants.openWeatherMapAPIKey, city)
        const fiveDayForecastData = yield fetchFiveDayWeatherData(Utils.constants.openWeatherMapAPIKey, city)
        const forecastList = []
        for(let i = 0; i < fiveDayForecastData.list.length; i++){
            const date = new Date(fiveDayForecastData.list[i].dt_txt);
            if(date.getHours() === 0){
                forecastList.push(fiveDayForecastData.list[i])
            }
        }
        yield put({type: GET_WEATHER_DATA_SUCCESS, payload: {currentWeatherData: weatherData, fiveDayWeatherData: {...fiveDayForecastData, list: forecastList}}});
        successCallback(weatherData);
    } catch (e) {
        yield put({type: GET_WEATHER_DATA_FAILURE, payload: e.message});
        failureCallback(e.message)
    }
}

function fetchWeatherData(apiKey, city){
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city}`)
        .then(res => {
            return res.json()
        })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

function fetchFiveDayWeatherData(apiKey, city){
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?APPID=${apiKey}&q=${city}`)
        .then(res => {
            return res.json()
        })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

function* dashboardSaga() {
    yield takeLatest(GET_WEATHER_DATA, getWeatherData);
}
  
export default dashboardSaga;