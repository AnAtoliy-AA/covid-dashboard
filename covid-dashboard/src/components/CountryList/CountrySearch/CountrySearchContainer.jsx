import { setActiveCountryActionCreator, setIsCountrySelectedActionCreator } from '../../../redux/countryList-reducer';

import CountrySearch from './CountrySearch';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    countryInfoList: state.countryList.countryInfoList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setActiveCountry: (activeCountry) => {
      dispatch(setActiveCountryActionCreator(activeCountry))
    },
    setIsCountrySelected: (value) => {
      dispatch(setIsCountrySelectedActionCreator(value))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearch);
