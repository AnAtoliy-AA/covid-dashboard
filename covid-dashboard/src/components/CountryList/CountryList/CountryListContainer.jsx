import CountryList from './CountryList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        countryInfoList: state.countryList.countryInfoList,
        activeCountry: state.countryList.activeCountry,
    }
}

export default connect(mapStateToProps, {})(CountryList);