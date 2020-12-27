
import ListCountry from './ListCountry';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        countryInfoList: state.countryList.countryInfoList,
        activeCountry: state.countryList.activeCountry,
        worldWideData: state.countryList.worldWideData,
        covidTableWorldWideData: state.countryList.worldWideData,
        populationValueType: state.countryList.populationValueType,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCountry);