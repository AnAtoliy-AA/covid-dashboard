import CountryLevel from './CountryLevel'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        country: state.cases.country,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    //    setCountry: (country) => {
    //        dispatch(setCountryActionCreator(country))
    //    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryLevel);