import { defaultcountryInfoList } from "./countryInfoList"

const ACTION_CONST = {
    // SET_COUNTRIES: 'SET_COUNTRIES',
    SET_GLOBAL: 'SET_GLOBAL',
    SET_COUNTRIES_INFO: 'SET_COUNTRIES_INFO',
    SET_ACTIVE_COUNTRY: 'SET_ACTIVE_COUNTRY',
    // SET_RELATIVE_ACTIVE_COUNTRY: 'SET_RELATIVE_ACTIVE_COUNTRY',
    // SET_COVID_TABLE_ACTIVE_COUNTRY: 'SET_COVID_TABLE_ACTIVE_COUNTRY',
    // SET_COVID_TABLE_ACTIVE_COUNTRY_DATA: 'SET_COVID_TABLE_ACTIVE_COUNTRY_DATA',
    SET_IS_COUNTRY_SELECTED: 'SET_IS_COUNTRY_SELECTED',
    // SET_FLAG: 'SET_FLAG',
    // SET_POPULATION: 'SET_POPULATION',
    SET_COVID_TABLE_WORLD_WIDE_DATA: 'SET_COVID_TABLE_WORLD_WIDE_DATA',
    SET_POPULATION_TYPE_VALUE: 'SET_POPULATION_TYPE_VALUE',
    SET_ABSOLUTE_WORLD_WIDE_DATA: 'SET_ABSOLUTE_WORLD_WIDE_DATA',
    SET_RELATIVE_WORLD_WIDE_DATA: 'SET_RELATIVE_WORLD_WIDE_DATA',
    SET_IS_LAST_DAY_SELECTED: 'SET_IS_LAST_DAY_SELECTED',
    SET_IS_RELATIVE_POPULATION_SELECTED:'SET_IS_RELATIVE_POPULATION_SELECTED',
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
    // covidTableActiveCountry: {
    //     Country: "",
    //     CountryCode: "",
    //     Slug: "",
    //     NewConfirmed: 0,
    //     TotalConfirmed: 0,
    //     NewDeaths: 0,
    //     TotalDeaths: 0,
    //     NewRecovered: 0,
    //     TotalRecovered: 0,
    // },
    isCountrySelected: false,
    isLastDaySelected: false,
    isRelativePopulationSeleted: false,
}

const countryListReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ACTION_CONST.SET_COUNTRIES: {
        //     return { ...state, countryList: action.countryList }
        // }
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
        // case ACTION_CONST.SET_RELATIVE_ACTIVE_COUNTRY: {
        //     return { ...state, relativeActiveCountry: action.activeCountry }
        // }
        // case ACTION_CONST.SET_COVID_TABLE_ACTIVE_COUNTRY: {
        //     return { ...state, covidTableActiveCountry: action.activeCountry }
        // }
        // case ACTION_CONST.SET_COVID_TABLE_ACTIVE_COUNTRY_DATA: {
        //     return { ...state, covidTableActiveCountry: action.activeCountry }
        // }
        // case ACTION_CONST.SET_FLAG: {
        //     return { ...state, countryFlag: action.countryFlag }
        // }
        // case ACTION_CONST.SET_POPULATION: {
        //     return { ...state, countryPopulation: action.countryPopulation }
        // }
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
        case ACTION_CONST.SET_IS_COUNTRY_SELECTED: {
            return { ...state, isCountrySelected: action.value }
        }
        default:
            return state;
    }
}


// export const setCountriesDataActionCreator = (countryList) => ({ type: ACTION_CONST.SET_COUNTRIES, countryList });
export const setActiveCountryActionCreator = (activeCountry) => ({ type: ACTION_CONST.SET_ACTIVE_COUNTRY, activeCountry });
// export const setActiveRelativeCountryActionCreator = (activeCountry) => ({ type: ACTION_CONST.SET_RELATIVE_ACTIVE_COUNTRY, activeCountry });
// export const setCovidTableActiveCountryActionCreator = (activeCountry) => ({ type: ACTION_CONST.SET_COVID_TABLE_ACTIVE_COUNTRY, activeCountry });
export const setGlobalDataActionCreator = (worldWideData) => ({ type: ACTION_CONST.SET_GLOBAL, worldWideData });
export const setCovidTableWorldWideDataActionCreator = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_COVID_TABLE_WORLD_WIDE_DATA, covidTableWorldWideData });
// export const setPopulationActionCreator = (countryPopulation) => ({ type: ACTION_CONST.SET_POPULATION, countryPopulation });
// export const setFlagUrlActionCreator = (countryFlag) => ({ type: ACTION_CONST.SET_FLAG, countryFlag });

export const setPopulationTypeValueActionCreator = (populationValueType) => ({ type: ACTION_CONST.SET_POPULATION_TYPE_VALUE, populationValueType });
export const setAbsoluteDataActionCreator = (populationValueType) => ({ type: ACTION_CONST.SET_ABSOLUTE_VALUE, populationValueType });
export const setIsLastDaySelectedActionCreator = (value) => ({ type: ACTION_CONST.SET_IS_LAST_DAY_SELECTED, value });
export const setCountriesRelativeDataActionCreator = (countryList) => ({ type: ACTION_CONST.SET_RELATIVE_CO, countryList });
export const setGlobalAbsoluteDataActionCreator = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_ABSOLUTE_WORLD_WIDE_DATA, covidTableWorldWideData });
export const setGlobalRelativeDataActionCreator = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_RELATIVE_WORLD_WIDE_DATA, covidTableWorldWideData });

export const setCovidTableActiveCountryDataActionCreator = (activeCountry) => ({ type: ACTION_CONST.SET_COVID_TABLE_ACTIVE_COUNTRY_DATA, activeCountry });
export const setIsCountrySelectedActionCreator = (value) => ({ type: ACTION_CONST.SET_IS_COUNTRY_SELECTED, value });
export const setIsRelativePopulationSeletedActionCreator = (value) => ({ type: ACTION_CONST.SET_IS_RELATIVE_POPULATION_SELECTED, value });
export const setCountriesInfoDataActionCreator = (countryInfoList) => ({ type: ACTION_CONST.SET_COUNTRIES_INFO, countryInfoList })

export default countryListReducer;