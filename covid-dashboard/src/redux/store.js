import countryListReducer from './countryList-reducer'

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    countryList: countryListReducer,
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;