import CovidMap from './CovidMap';
import { connect } from 'react-redux';
import { setActiveCountry } from '../../redux/countryList-reducer';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        position: state.countryList.activeCountry.countryInfo,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        isCountrySelected: state.countryList.isCountrySelected,
        countryInfoList: state.countryList.countryInfoList,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setActiveCountry: (activeCountry) => {
//             dispatch(setActiveCountryActionCreator(activeCountry));
//           },
//     }
// }

export default connect(mapStateToProps, { setActiveCountry })(CovidMap);