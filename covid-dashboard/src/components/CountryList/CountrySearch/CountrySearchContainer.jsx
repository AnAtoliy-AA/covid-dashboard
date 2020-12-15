import CountrySearch from './CountrySearch';
import { connect } from 'react-redux';
import { setActiveCountryActionCreator } from '../../../redux/countryList-reducer';

let mapStateToProps = (state) => {
  return {
    countryList: state.countryList.countryList,
    activeCountry: state.countryList.activeCountry,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setActiveCountry: (activeCountry) => {
      dispatch(setActiveCountryActionCreator(activeCountry));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearch);
