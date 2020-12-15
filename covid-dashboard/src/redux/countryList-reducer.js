
const ACTION_CONST = {
    SET_COUNTRIES: 'SET_COUNTRIES',
    SET_GLOBAL: 'SET_GLOBAL',
    SET_ACTIVE_COUNTRY: 'SET_ACTIVE_COUNTRY',
    SET_FLAG: 'SET_FLAG',
    SET_POPULATION: 'SET_POPULATION',
    SET_COVID_TABLE_WORLD_WIDE_DATA: 'SET_COVID_TABLE_WORLD_WIDE_DATA',
    SET_POPULATION_TYPE_VALUE: 'SET_POPULATION_TYPE_VALUE',
    SET_ABSOLUTE_WORLD_WIDE_DATA: 'SET_ABSOLUTE_WORLD_WIDE_DATA',
    SET_RELATIVE_WORLD_WIDE_DATA: 'SET_RELATIVE_WORLD_WIDE_DATA',
}

let initialState = {
    countryList: [],
    activeCountry: '',
    worldWideData: '',
    covidTableWorldWideData: {
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        NewConfirmed: 0,
        TotalConfirmed: 0,
    }
}

const countryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.SET_COUNTRIES: {
            return { ...state, countryList: action.countryList }
        }
        case ACTION_CONST.SET_GLOBAL: {
            return { ...state, worldWideData: action.worldWideData }
        }
        case ACTION_CONST.SET_ACTIVE_COUNTRY: {
            return { ...state, activeCountry: action.activeCountry }
        }
        case ACTION_CONST.SET_FLAG: {
            return { ...state, countryFlag: action.countryFlag }
        }
        case ACTION_CONST.SET_POPULATION: {
            return { ...state, countryPopulation: action.countryPopulation }
        }
        case ACTION_CONST.SET_COVID_TABLE_WORLD_WIDE_DATA: {
            return { ...state, covidTableWorldWideData: action.covidTableWorldWideData }
        }
        case ACTION_CONST.SET_POPULATION_TYPE_VALUE: {
            return { ...state, populationValueType: action.populationValueType }
        }
        case ACTION_CONST.SET_RELATIVE_WORLD_WIDE_DATA: {
            return { ...state, covidTableWorldWideData: action.covidTableWorldWideData }
        }
        case ACTION_CONST.SET_ABSOLUTE_WORLD_WIDE_DATA: {
            return { ...state, covidTableWorldWideData: action.covidTableWorldWideData }
        }
        default:
            return state;
    }
}


export const setCountriesDataActionCreator = (countryList) => ({ type: ACTION_CONST.SET_COUNTRIES, countryList });
export const setActiveCountryActionCreator = (activeCountry) => ({ type: ACTION_CONST.SET_ACTIVE_COUNTRY, activeCountry });
export const setGlobalDataActionCreator = (worldWideData) => ({ type: ACTION_CONST.SET_GLOBAL, worldWideData });
export const setCovidTableWorldWideDataActionCreator = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_COVID_TABLE_WORLD_WIDE_DATA, covidTableWorldWideData });
export const setPopulationActionCreator = (countryPopulation) => ({ type: ACTION_CONST.SET_POPULATION, countryPopulation });
export const setFlagUrlActionCreator = (countryFlag) => ({ type: ACTION_CONST.SET_FLAG, countryFlag });

export const setPopulationTypeValueActionCreator = (populationValueType) => ({ type: ACTION_CONST.SET_POPULATION_TYPE_VALUE, populationValueType });
export const setAbsoluteDataActionCreator = (populationValueType) => ({ type: ACTION_CONST.SET_ABSOLUTE_VALUE, populationValueType });
export const setCountriesRelativeDataActionCreator = (countryList) => ({ type: ACTION_CONST.SET_RELATIVE_CO, countryList });
export const setGlobalAbsoluteDataActionCreator = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_ABSOLUTE_WORLD_WIDE_DATA, covidTableWorldWideData });
export const setGlobalRelativeDataActionCreator = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_RELATIVE_WORLD_WIDE_DATA, covidTableWorldWideData });

export default countryListReducer;