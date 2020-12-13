import CountryLevel from './CountryLevel'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.covidTable.worldWideData,
        activeCountry: state.countryList.activeCountry,
        countryPopulation: state.countryList.countryPopulation,
        countryFlag: state.countryList.countryFlag,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryLevel);