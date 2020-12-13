import { setCountriesAbsoluteDataActionCreator, setCountriesRelativeDataActionCreator, setGlobalAbsoluteDataActionCreator, setGlobalRelativeDataActionCreator, setPopulationTypeValueActionCreator } from '../../redux/table-reducer';

import CovidTable from './CovidTable';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        countryList: state.countryList.countryList,
        populationValueType: state.covidTable.populationValueType,
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
        setGlobalAbsoluteData: (worldWideData) => {
            dispatch(setGlobalAbsoluteDataActionCreator(worldWideData))
        },
        setGlobalRelativeData: (worldWideData) => {
            dispatch(setGlobalRelativeDataActionCreator(worldWideData))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidTable);