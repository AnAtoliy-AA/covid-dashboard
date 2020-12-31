import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import countryListReducer from './countryList-reducer'
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    countryList: countryListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;