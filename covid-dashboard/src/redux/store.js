import casesReducer from './cases-reducer'
import tableReducer from './table-reducer';

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    cases: casesReducer,
    table: tableReducer,
})

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;