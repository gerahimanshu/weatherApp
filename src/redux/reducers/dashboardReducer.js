import { 
    CHANGE_LOADING, 
    GET_WEATHER_DATA_SUCCESS, 
    GET_WEATHER_DATA_FAILURE,
    CHANGE_CITY
} from '../actions/types' 

const initialState = {
    cityName: 'Select City',
    weatherData: null,
    loading: false,
    error: null
}

const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_LOADING: 
            return {
                ...state, 
                loading: action.payload
            }
        case CHANGE_CITY: 
            return {
                ...state, 
                cityName: action.payload
            }
        case GET_WEATHER_DATA_SUCCESS: 
            return {
                ...state, 
                weatherData: action.payload,
                loading: false
            }
        case GET_WEATHER_DATA_FAILURE: 
            return {
                ...state, 
                error: action.payload,
                loading: false
            }   
        default:
            return state;
    }
}

export default dashboardReducer;