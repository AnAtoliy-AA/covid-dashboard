
const ACTION_CONST = {
    SET_COUNTRIES: 'SET_COUNTRIES',
}

let initialState = {
    countries: [],
}

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.SET_COUNTRIES: {
            return { ...state, countries: action.countries}
        }
        default: 
        return state;
    }
}


export const setCountriesDataActionCreator = (countries) => ({type: ACTION_CONST.SET_COUNTRIES, countries});

export default casesReducer;