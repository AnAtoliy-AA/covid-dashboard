import CountryLevel from './CountryLevel'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        activeCountry: state.countryList.covidTableActiveCountry,
        countryPopulation: state.countryList.countryPopulation,
        countryFlag: state.countryList.countryFlag,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        isCountrySelected: state.countryList.isCountrySelected,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryLevel);