import { setCountriesAbsoluteDataActionCreator, setCountriesRelativeDataActionCreator, setGlobalAbsoluteDataActionCreator, setGlobalRelativeDataActionCreator, setPopulationTypeValueActionCreator } from '../../redux/table-reducer';

import CovidTable from './CovidTable';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        global: state.cases.global,
        countries: state.cases.countries,
        value: state.table.value,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPopulationTypeValue: (value) => {
            dispatch(setPopulationTypeValueActionCreator(value))
        },
        //     dispatch(setCountriesAbsoluteDataActionCreator(countries))
        // },
        setCountriesRelativeData: (countries) => {
            dispatch(setCountriesRelativeDataActionCreator(countries))
        },
        setGlobalAbsoluteData: (global) => {
            dispatch(setGlobalAbsoluteDataActionCreator(global))
        },
        setGlobalRelativeData: (global) => {
            dispatch(setGlobalRelativeDataActionCreator(global))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidTable);