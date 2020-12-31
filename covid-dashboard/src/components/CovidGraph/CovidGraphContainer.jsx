import CovidGraph from './CovidGraph';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    activeCountry: state.countryList.activeCountry,
    isCountrySelected: state.countryList.isCountrySelected,
    isLastDaySelected: state.countryList.isLastDaySelected,
    isRelativePopulationSeleted: state.countryList.isRelativePopulationSeleted,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidGraph);
