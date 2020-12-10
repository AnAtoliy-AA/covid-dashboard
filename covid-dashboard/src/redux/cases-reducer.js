
const ACTION_CONST = {
    SET_COUNTRIES: 'SET_COUNTRIES',
    SET_GLOBAL: 'SET_GLOBAL',
    SET_ACTIVE_COUNTRY: 'SET_ACTIVE_COUNTRY',
}

let initialState = {
    countries: [],
    country: '',
}

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.SET_COUNTRIES: {
            return { ...state, countries: action.countries }
        }
        case ACTION_CONST.SET_GLOBAL: {
            return { ...state, global: action.global }
        }
        case ACTION_CONST.SET_ACTIVE_COUNTRY: {
            return { ...state, country: action.country }
        }
        default:
            return state;
    }
}


export const setCountriesDataActionCreator = (countries) => ({ type: ACTION_CONST.SET_COUNTRIES, countries });
export const setActiveCountryActionCreator = (country) => ({ type: ACTION_CONST.SET_ACTIVE_COUNTRY, country });
export const setGlobalDataActionCreator = (global) => ({type: ACTION_CONST.SET_GLOBAL, global});
export default casesReducer;