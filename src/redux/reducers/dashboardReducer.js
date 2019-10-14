import { 
    CHANGE_LOADING, 
    GET_WEATHER_DATA_SUCCESS, 
    GET_WEATHER_DATA_FAILURE
} from '../actions/types' 

const initialState = {
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