import Cases from './Cases';
import { connect } from 'react-redux';
import { setCountriesDataActionCreator } from '../../redux/cases-reducer';

let mapStateToProps = (state) => {
    return {
        countries: state.cases.countries,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountriesData: (countries) => {
            dispatch(setCountriesDataActionCreator(countries))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cases);