import { setCountriesAbsoluteDataActionCreator, setCountriesRelativeDataActionCreator, setGlobalAbsoluteDataActionCreator, setGlobalRelativeDataActionCreator, setPopulationTypeValueActionCreator } from '../../redux/countryList-reducer';

import CovidTable from './CovidTable';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        countryList: state.countryList.countryList,
        populationValueType: state.countryList.populationValueType,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPopulationTypeValue: (populationValueType) => {
            dispatch(setPopulationTypeValueActionCreator(populationValueType))
        },
        //     dispatch(setCountriesAbsoluteDataActionCreator(countries))
        // },
        setCountriesRelativeData: (countryList) => {
            dispatch(setCountriesRelativeDataActionCreator(countryList))
        },
        setGlobalAbsoluteData: (covidTableWorldWideData) => {
            dispatch(setGlobalAbsoluteDataActionCreator(covidTableWorldWideData))
        },
        setGlobalRelativeData: (covidTableWorldWideData) => {
            dispatch(setGlobalRelativeDataActionCreator(covidTableWorldWideData))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidTable);