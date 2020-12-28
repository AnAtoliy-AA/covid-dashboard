import CountryRecovered from './CountryRecovered'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        activeCountry: state.countryList.activeCountry,
        activeCountryPopulation: state.countryList.activeCountry.population,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        isCountrySelected: state.countryList.isCountrySelected,
        populationValueType: state.countryList.populationValueType,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryRecovered);