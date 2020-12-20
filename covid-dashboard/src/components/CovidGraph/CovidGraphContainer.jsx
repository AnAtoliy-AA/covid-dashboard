import CovidGraph from './CovidGraph';
import { connect } from 'react-redux';
// import { setActiveCountryActionCreator } from '../../../redux/countryList-reducer';

let mapStateToProps = (state) => {
  return {
    // worldWideData: state.countryList.worldWideData,
    activeCountry: state.countryList.activeCountry,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidGraph);
