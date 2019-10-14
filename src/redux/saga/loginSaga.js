import { put, takeLatest } from 'redux-saga/effects'
import {PERFORM_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/types';
import {Utils} from '../../utils';
const uuidv4 = require('uuid/v4'); 

function* login(action) {
    const {username, password, successCallback, failureCallback} = action.payload; 
    try {
        if(username !== Utils.constants.username){
            throw {
                message: 'Useranme Incorrect!'
            }
        }
        if(password !== Utils.constants.password){
            throw {
                message: 'Password Incorrect!'
            }
        }
        const token = uuidv4();
        yield put({type: LOGIN_SUCCESS, payload: token});
        successCallback(token)
    } catch (e) {
        yield put({type: LOGIN_FAILURE, payload: e.message});
        failureCallback(e.message)
    }
}

function* loginSaga() {
    yield takeLatest(PERFORM_LOGIN, login);
}
  
export default loginSaga;