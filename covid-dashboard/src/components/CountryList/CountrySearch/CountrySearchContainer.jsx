import { setActiveCountry, setIsCountrySelected } from '../../../redux/countryList-reducer';

import CountrySearch from './CountrySearch';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    countryInfoList: state.countryList.countryInfoList,
  };
};

export default connect(mapStateToProps, { setActiveCountry, setIsCountrySelected })(CountrySearch);
