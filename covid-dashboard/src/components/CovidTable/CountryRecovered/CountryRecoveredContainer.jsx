import CountryRecovered from './CountryRecovered'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        activeCountry: state.countryList.covidTableActiveCountry,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        isCountrySelected: state.countryList.isCountrySelected,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryRecovered);