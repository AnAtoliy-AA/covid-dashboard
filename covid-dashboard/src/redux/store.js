import casesReducer from './cases-reducer'

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    cases: casesReducer,
})

let store = createStore(reducers);

export default store;