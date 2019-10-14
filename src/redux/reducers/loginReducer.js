import {CHANGE_USERNAME, CHANGE_PASSWORD, CHANGE_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/types';

const initialState = {
    username: '',
    password: '',
    token: '',
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_USERNAME: 
            return {
                ...state, 
                username: action.payload
            }
        case CHANGE_PASSWORD: 
            return {
                ...state, 
                password: action.payload
            }
        case CHANGE_LOADING: 
            return {
                ...state, 
                loading: action.payload
            }
        case LOGIN_SUCCESS: 
            return {
                ...state, 
                token: action.payload
            }
        case LOGIN_FAILURE: 
            return {
                ...state, 
                error: action.payload
            }   
        default:
            return state;
    }
}

export default loginReducer;