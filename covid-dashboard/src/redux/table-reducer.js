const ACTION_CONST = {
    // SET_ABSOLUTE_VALUE: ' SET_ABSOLUTE_VALUE',
    // SET_RELATIVE_VALUE: 'SET_RELATIVE_VALUE',
SET_POPULATION_TYPE_VALUE: 'SET_POPULATION_TYPE_VALUE',
SET_ABSOLUTE_GLOBAL_DATA: 'SET_ABSOLUTE_GLOBAL_DATA',
SET_RELATIVE_GLOBAL_DATA: 'SET_RELATIVE_GLOBAL_DATA',
}

let initialState = {
    countryList: [],
    activeCountry: '',
    worldWideData: '',
    populationValueType: 'absolute',
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
            return { ...state, populationValueType: action.populationValueType }
        }
        case ACTION_CONST.SET_RELATIVE_GLOBAL_DATA: {
            return { ...state, worldWideData: action.worldWideData }
        }
        case ACTION_CONST.SET_ABSOLUTE_GLOBAL_DATA: {
            return { ...state, worldWideData: action.worldWideData}
        }
    
        default:
            return state;
    }
}

export const setPopulationTypeValueActionCreator = (populationValueType) => ({type: ACTION_CONST.SET_POPULATION_TYPE_VALUE, populationValueType});
export const setAbsoluteDataActionCreator = (populationValueType) => ({ type: ACTION_CONST.SET_ABSOLUTE_VALUE, populationValueType });
export const setCountriesRelativeDataActionCreator = (countryList) => ({ type: ACTION_CONST.SET_RELATIVE_CO, countryList });
export const setGlobalAbsoluteDataActionCreator = (worldWideData) => ({ type: ACTION_CONST.SET_ABSOLUTE_GLOBAL_DATA, worldWideData });
export const setGlobalRelativeDataActionCreator = (worldWideData) => ({ type: ACTION_CONST.SET_RELATIVE_GLOBAL_DATA, worldWideData });

export default tableReducer;