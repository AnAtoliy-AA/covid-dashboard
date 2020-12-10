import { setActiveCountryActionCreator, setCountriesDataActionCreator, setGlobalDataActionCreator } from '../../redux/cases-reducer';

import Cases from './Cases';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        countries: state.cases.countries,
        country: state.cases.country,
        global: state.cases.global,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountriesData: (countries) => {
            dispatch(setCountriesDataActionCreator(countries))
        },
        setGlobalData: (global) => {
           dispatch(setGlobalDataActionCreator(global))
        },
        setActiveCountry: (country) => {
            dispatch(setActiveCountryActionCreator(country))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cases);