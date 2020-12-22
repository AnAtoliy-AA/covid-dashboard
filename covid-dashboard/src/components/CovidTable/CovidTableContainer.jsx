import { setCountriesRelativeDataActionCreator, setCovidTableActiveCountryDataActionCreator, setGlobalAbsoluteDataActionCreator, setGlobalRelativeDataActionCreator, setPopulationTypeValueActionCreator } from '../../redux/countryList-reducer';

import CovidTable from './CovidTable';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        activeCountry: state.countryList.activeCountry,
        relativeActiveCountry: state.countryList.relativeActiveCountry,
        countryList: state.countryList.countryList,
        populationValueType: state.countryList.populationValueType,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPopulationTypeValue: (populationValueType) => {
            dispatch(setPopulationTypeValueActionCreator(populationValueType))
        },
        setCountriesRelativeData: (countryList) => {
            dispatch(setCountriesRelativeDataActionCreator(countryList))
        },
        setGlobalAbsoluteData: (covidTableWorldWideData) => {
            dispatch(setGlobalAbsoluteDataActionCreator(covidTableWorldWideData))
        },
        setGlobalRelativeData: (covidTableWorldWideData) => {
            dispatch(setGlobalRelativeDataActionCreator(covidTableWorldWideData))
        },
        setCovidTableActiveCountryData: (activeCountry) => {
            dispatch(setCovidTableActiveCountryDataActionCreator(activeCountry))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidTable);