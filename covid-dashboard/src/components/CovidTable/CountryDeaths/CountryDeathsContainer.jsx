import CountryDeaths from './CountryDeaths';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        activeCountry: state.countryList.covidTableActiveCountry,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDeaths);