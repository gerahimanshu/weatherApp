import {combineReducers, createStore, applyMiddleware} from 'redux';
import loginReducer from './reducers/loginReducer';
import dashboardReducer from './reducers/dashboardReducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer
});

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga)
    return store;
}


export default configureStore;