import { setActiveCountryActionCreator, setCountriesInfoDataActionCreator, setIsCountrySelectedActionCreator } from '../../../redux/countryList-reducer';

import CountrySearch from './CountrySearch';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    countryInfoList: state.countryList.countryInfoList,
    activeCountry: state.countryList.activeCountry,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setCountriesInfoData: (countryInfoList) => {
      dispatch(setCountriesInfoDataActionCreator(countryInfoList))
    },
    setActiveCountry: (activeCountry) => {
      dispatch(setActiveCountryActionCreator(activeCountry))
    },
    setIsCountrySelected: (value) => {
      dispatch(setIsCountrySelectedActionCreator(value))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearch);
