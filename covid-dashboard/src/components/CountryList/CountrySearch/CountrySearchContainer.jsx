import { setActiveCountryActionCreator, setActiveRelativeCountryActionCreator, setCountriesInfoDataActionCreator, setCovidTableActiveCountryActionCreator, setCovidTableWorldWideDataActionCreator, setGlobalDataActionCreator, setIsCountrySelectedActionCreator } from '../../../redux/countryList-reducer';

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
    setGlobalData: (worldWideData) => {
      dispatch(setGlobalDataActionCreator(worldWideData))
    },
    setCovidTableWorldWideData: (covidTableWorldWideData) => {
      dispatch(setCovidTableWorldWideDataActionCreator(covidTableWorldWideData))
    },
    setActiveCountry: (activeCountry) => {
      dispatch(setActiveCountryActionCreator(activeCountry))
    },
    setActiveRelativeCountry: (activeCountry) => {
      dispatch(setActiveRelativeCountryActionCreator(activeCountry))
    },
    setCovidTableActiveCountry: (activeCountry) => {
      dispatch(setCovidTableActiveCountryActionCreator(activeCountry))
    },
    setIsCountrySelected: (value) => {
      dispatch(setIsCountrySelectedActionCreator(value))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearch);
