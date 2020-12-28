import { defaultcountryInfoList } from "./countryInfoList"

const ACTION_CONST = {
    SET_GLOBAL: 'SET_GLOBAL',
    SET_COUNTRIES_INFO: 'SET_COUNTRIES_INFO',
    SET_ACTIVE_COUNTRY: 'SET_ACTIVE_COUNTRY',
    SET_IS_COUNTRY_SELECTED: 'SET_IS_COUNTRY_SELECTED',
    SET_COVID_TABLE_WORLD_WIDE_DATA: 'SET_COVID_TABLE_WORLD_WIDE_DATA',
    SET_POPULATION_TYPE_VALUE: 'SET_POPULATION_TYPE_VALUE',
    SET_ABSOLUTE_WORLD_WIDE_DATA: 'SET_ABSOLUTE_WORLD_WIDE_DATA',
    SET_RELATIVE_WORLD_WIDE_DATA: 'SET_RELATIVE_WORLD_WIDE_DATA',
    SET_IS_LAST_DAY_SELECTED: 'SET_IS_LAST_DAY_SELECTED',
    SET_IS_RELATIVE_POPULATION_SELECTED: 'SET_IS_RELATIVE_POPULATION_SELECTED',
}

let initialState = {
    countryInfoList: defaultcountryInfoList,
    activeCountry: {
        countryInfo: {
            lat: 53,
            long: 28,
        }
    },
    worldWideData: {
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        NewConfirmed: 0,
        TotalConfirmed: 0,
    },
    covidTableWorldWideData: {
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        NewConfirmed: 0,
        TotalConfirmed: 0,
    },
    isCountrySelected: false,
    isLastDaySelected: false,
    isRelativePopulationSeleted: false,
}

const countryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.SET_GLOBAL: {
            return { ...state, worldWideData: action.worldWideData }
        }
        case ACTION_CONST.SET_COUNTRIES_INFO: {
            return { ...state, countryInfoList: action.countryInfoList }
        }
        case ACTION_CONST.SET_ACTIVE_COUNTRY: {
            return { ...state, activeCountry: action.activeCountry }
        }
        case ACTION_CONST.SET_IS_LAST_DAY_SELECTED: {
            return { ...state, isLastDaySelected: action.value }
        }
        case ACTION_CONST.SET_IS_RELATIVE_POPULATION_SELECTED: {
            return { ...state, isRelativePopulationSeleted: action.value }
        }
        case ACTION_CONST.SET_COVID_TABLE_WORLD_WIDE_DATA: {
            return { ...state, covidTableWorldWideData: action.covidTableWorldWideData }
        }
        case ACTION_CONST.SET_IS_COUNTRY_SELECTED: {
            return { ...state, isCountrySelected: action.value }
        }
        default:
            return state;
    }
}
export const setActiveCountryActionCreator = (activeCountry) => ({ type: ACTION_CONST.SET_ACTIVE_COUNTRY, activeCountry });
export const setGlobalDataActionCreator = (worldWideData) => ({ type: ACTION_CONST.SET_GLOBAL, worldWideData });
export const setCovidTableWorldWideDataActionCreator = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_COVID_TABLE_WORLD_WIDE_DATA, covidTableWorldWideData });
export const setIsLastDaySelectedActionCreator = (value) => ({ type: ACTION_CONST.SET_IS_LAST_DAY_SELECTED, value });
export const setIsCountrySelectedActionCreator = (value) => ({ type: ACTION_CONST.SET_IS_COUNTRY_SELECTED, value });
export const setIsRelativePopulationSeletedActionCreator = (value) => ({ type: ACTION_CONST.SET_IS_RELATIVE_POPULATION_SELECTED, value });

export const setCountriesInfoDataActionCreator = (countryInfoList) => ({ type: ACTION_CONST.SET_COUNTRIES_INFO, countryInfoList })

export const setCountriesRelativeDataActionCreator = (countryList) => ({ type: ACTION_CONST.SET_RELATIVE_CO, countryList });

export const setCovidTableActiveCountryDataActionCreator = (activeCountry) => ({ type: ACTION_CONST.SET_COVID_TABLE_ACTIVE_COUNTRY_DATA, activeCountry });

export default countryListReducer;