const ACTION_CONST = {
    // SET_ABSOLUTE_VALUE: ' SET_ABSOLUTE_VALUE',
    // SET_RELATIVE_VALUE: 'SET_RELATIVE_VALUE',
SET_POPULATION_TYPE_VALUE: 'SET_POPULATION_TYPE_VALUE',
SET_ABSOLUTE_GLOBAL_DATA: 'SET_ABSOLUTE_GLOBAL_DATA',
SET_RELATIVE_GLOBAL_DATA: 'SET_RELATIVE_GLOBAL_DATA',
}

let initialState = {
    countries: [],
    country: '',
    global: '',
    value: 'absolute',
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ACTION_CONST.SET_ABSOLUTE_VALUE: {
        //     return { ...state, value: action.value }
        // }
        // case ACTION_CONST.SET_RELATIVE_VALUE: {
        //     return { ...state, value: action.value }
        // }
        case ACTION_CONST.SET_POPULATION_TYPE_VALUE: {
            return { ...state, value: action.value }
        }
        case ACTION_CONST.SET_RELATIVE_GLOBAL_DATA: {
            return { ...state, global: action.global }
        }
        case ACTION_CONST.SET_ABSOLUTE_GLOBAL_DATA: {
            return { ...state, global: action.global}
        }
    
        default:
            return state;
    }
}

export const setPopulationTypeValueActionCreator = (value) => ({type: ACTION_CONST.SET_POPULATION_TYPE_VALUE, value});
export const setAbsoluteDataActionCreator = (value) => ({ type: ACTION_CONST.SET_ABSOLUTE_VALUE, value });
export const setCountriesRelativeDataActionCreator = (countries) => ({ type: ACTION_CONST.SET_RELATIVE_CO, countries });
export const setGlobalAbsoluteDataActionCreator = (global) => ({ type: ACTION_CONST.SET_ABSOLUTE_GLOBAL_DATA, global });
export const setGlobalRelativeDataActionCreator = (global) => ({ type: ACTION_CONST.SET_RELATIVE_GLOBAL_DATA, global });

export default tableReducer;