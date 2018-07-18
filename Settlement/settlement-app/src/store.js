import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {combineReducers} from 'redux';
import {reducerLogin} from './reducers/loginReducer';

const reducer =  combineReducers({
    reducerLogin
});

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
export default store;