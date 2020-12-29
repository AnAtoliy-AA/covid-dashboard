import { getCountriesInfo, getWorldWide, setActiveCountry, setCountriesInfoData, setCovidTableWorldWideData, setIsCountrySelected, setWorldWideData } from '../../redux/countryList-reducer';

import CountryList from './CountryList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        countryInfoList: state.countryList.countryInfoList,
        activeCountry: state.countryList.activeCountry,
        worldWideData: state.countryList.worldWideData,
        covidTableWorldWideData: state.countryList.worldWideData,
        populationValueType: state.countryList.populationValueType,
    }
}

export default connect(mapStateToProps, {
    setCountriesInfoData, setWorldWideData, setCovidTableWorldWideData,
    setActiveCountry, setIsCountrySelected, getWorldWide,
     getCountriesInfo
})(CountryList);