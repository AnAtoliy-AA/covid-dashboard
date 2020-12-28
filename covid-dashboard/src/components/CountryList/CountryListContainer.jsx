import { setActiveCountryActionCreator, setActiveRelativeCountryActionCreator, setCountriesInfoDataActionCreator, setCovidTableActiveCountryActionCreator, setCovidTableWorldWideDataActionCreator, setGlobalDataActionCreator, setIsCountrySelectedActionCreator } from '../../redux/countryList-reducer';

import CountryList from './CountryList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        countryInfoList: state.countryList.countryInfoList,
        activeCountry: state.countryList.activeCountry,
        worldWideData: state.countryList.worldWideData,
        covidTableWorldWideData: state.countryList.worldWideData,
        populationValueType: state.countryList.populationValueType,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountriesInfoData: (countryInfoList) => {
            dispatch(setCountriesInfoDataActionCreator(countryInfoList))
        },
        setGlobalData: (worldWideData) => {
            dispatch(setGlobalDataActionCreator(worldWideData))
        },
        setCovidTableWorldWideData: (covidTableWorldWideData) => {
            dispatch(setCovidTableWorldWideDataActionCreator(covidTableWorldWideData))
        },
        setActiveCountry: (activeCountry) => {
            dispatch(setActiveCountryActionCreator(activeCountry))
        },
        setIsCountrySelected: (value) => {
            dispatch(setIsCountrySelectedActionCreator(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);