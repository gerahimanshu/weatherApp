import { all } from 'redux-saga/effects'
import loginSaga from './loginSaga';
import dashboardSaga from './dashboardSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        dashboardSaga()
    ])
}