import CovidMap from './CovidMap';
import { connect } from 'react-redux';
import { setActiveCountryActionCreator } from '../../redux/countryList-reducer';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        activeCountry: state.countryList.covidTableActiveCountry,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        isCountrySelected: state.countryList.isCountrySelected,
        countryInfoList: state.countryList.countryInfoList,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setActiveCountry: (activeCountry) => {
            dispatch(setActiveCountryActionCreator(activeCountry));
          },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidMap);