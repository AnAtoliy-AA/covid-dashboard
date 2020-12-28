import CountryDeaths from './CountryDeaths';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        activeCountry: state.countryList.activeCountry,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        isCountrySelected: state.countryList.isCountrySelected,
        isLastDaySelected: state.countryList.isLastDaySelected,
        isRelativePopulationSeleted: state.countryList.isRelativePopulationSeleted,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDeaths);