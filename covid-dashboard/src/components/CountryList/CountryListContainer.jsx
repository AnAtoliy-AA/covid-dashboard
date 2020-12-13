import { setActiveCountryActionCreator, setCountriesDataActionCreator, setCovidTableWorldWideDataActionCreator, setFlagUrlActionCreator, setGlobalDataActionCreator, setPopulationActionCreator } from '../../redux/countryList-reducer';

import CountryList from './CountryList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        countryList: state.countryList.countryList,
        activeCountry: state.countryList.activeCountry,
        worldWideData: state.countryList.worldWideData,
        countryPopulation: state.countryList.countryPopulation,
        countryFlag: state.countryList.countryFlag,
        covidTableWorldWideData: state.covidTable.worldWideData,
        populationValueType: state.covidTable.populationValueType,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountriesData: (countryList) => {
            dispatch(setCountriesDataActionCreator(countryList))
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
        setPopulation: (countryPopulation) => {
            dispatch(setPopulationActionCreator(countryPopulation))
        },
        setFlagUrl: (countryFlag) => {
            dispatch(setFlagUrlActionCreator(countryFlag))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);