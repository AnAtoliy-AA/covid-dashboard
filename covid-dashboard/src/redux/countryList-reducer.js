import { countriesAPI } from "../api/api"
import { defaultcountryInfoList } from "./countryInfoList"

const ACTION_CONST = {
    SET_COUNTRIES_INFO: 'SET_COUNTRIES_INFO',
    SET_WORLD_WIDE_DATA: 'SET_WORLD_WIDE_DATA',
    SET_COVID_TABLE_WORLD_WIDE_DATA: 'SET_COVID_TABLE_WORLD_WIDE_DATA',
    SET_ACTIVE_COUNTRY: 'SET_ACTIVE_COUNTRY',
    SET_IS_COUNTRY_SELECTED: 'SET_IS_COUNTRY_SELECTED',
    SET_IS_LAST_DAY_SELECTED: 'SET_IS_LAST_DAY_SELECTED',
    SET_IS_RELATIVE_POPULATION_SELECTED: 'SET_IS_RELATIVE_POPULATION_SELECTED',
}

let initialState = {
    countryInfoList: defaultcountryInfoList,
    activeCountry: {
        updated: 0,
        country: '',
        countryInfo: {
            _id: 0,
            iso2: '',
            iso3: '',
            lat: 53,
            long: 28,
            flag: ''
        },
        cases: 0,
        todayCases: 0,
        deaths: 0,
        todayDeaths: 0,
        recovered: 0,
        todayRecovered: 0,
        active: 0,
        critical: 0,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        tests: 0,
        testsPerOneMillion: 0,
        population: 0,
        continent: '',
        oneCasePerPeople: 0,
        oneDeathPerPeople: 0,
        oneTestPerPeople: 0,
        activePerOneMillion: 0,
        recoveredPerOneMillion: 0,
        criticalPerOneMillion: 0,
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
        case ACTION_CONST.SET_WORLD_WIDE_DATA: {
            return { ...state, worldWideData: action.worldWideData }
        }
        case ACTION_CONST.SET_COVID_TABLE_WORLD_WIDE_DATA: {
            return { ...state, covidTableWorldWideData: action.covidTableWorldWideData }
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
        case ACTION_CONST.SET_IS_COUNTRY_SELECTED: {
            return { ...state, isCountrySelected: action.value }
        }
        default:
            return state;
    }
}

export const setWorldWideData = (worldWideData) => ({ type: ACTION_CONST.SET_WORLD_WIDE_DATA, worldWideData });
export const setCovidTableWorldWideData = (covidTableWorldWideData) => ({ type: ACTION_CONST.SET_COVID_TABLE_WORLD_WIDE_DATA, covidTableWorldWideData });
export const setCountriesInfoData = (countryInfoList) => ({ type: ACTION_CONST.SET_COUNTRIES_INFO, countryInfoList })
export const setActiveCountry = (activeCountry) => ({ type: ACTION_CONST.SET_ACTIVE_COUNTRY, activeCountry });
export const setIsLastDaySelected = (value) => ({ type: ACTION_CONST.SET_IS_LAST_DAY_SELECTED, value });
export const setIsCountrySelected = (value) => ({ type: ACTION_CONST.SET_IS_COUNTRY_SELECTED, value });
export const setIsRelativePopulationSeleted = (value) => ({ type: ACTION_CONST.SET_IS_RELATIVE_POPULATION_SELECTED, value });

export const getWorldWide = () => {
    return (dispatch) => {
        countriesAPI.getWorldWide()
            .then((data) => {
                dispatch(setWorldWideData(data.Global));
                dispatch(setCovidTableWorldWideData(data.Global));
            });
    }
}

export const getCountriesInfo = () => {
    return (dispatch) => {
        countriesAPI.getCountriesInfo()
            .then((data) => {
                dispatch(setCountriesInfoData(data));
            });
    }
}

export default countryListReducer;
