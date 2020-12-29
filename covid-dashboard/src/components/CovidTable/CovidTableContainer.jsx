import { setCovidTableWorldWideData, setIsLastDaySelected, setIsRelativePopulationSeleted } from '../../redux/countryList-reducer';

import CovidTable from './CovidTable';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        covidTableWorldWideData: state.countryList.covidTableWorldWideData,
        activeCountry: state.countryList.activeCountry,
        relativeActiveCountry: state.countryList.relativeActiveCountry,
        countryList: state.countryList.countryList,
        isLastDaySelected: state.countryList.isLastDaySelected,
        isRelativePopulationSeleted: state.countryList.isRelativePopulationSeleted,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setIsLastDaySelected: (value) => {
//             dispatch(setIsLastDaySelectedActionCreator(value))
//         },
//         setCovidTableWorldWideData: (value) => {
//             dispatch(setCovidTableWorldWideDataActionCreator(value))
//         },
//         setIsRelativePopulationSeleted: (value) => {
//             dispatch(setIsRelativePopulationSeletedActionCreator(value))
//         },
//     }
// }

export default connect(mapStateToProps, { setCovidTableWorldWideData, setIsLastDaySelected, setIsRelativePopulationSeleted })(CovidTable);