import React, { Component } from 'react';
import { getCountriesInfo, getWorldWide, setActiveCountry, setCountriesInfoData, setCovidTableWorldWideData, setIsCountrySelected, setWorldWideData } from '../../redux/countryList-reducer';

import CountryListContainer from './CountryList/CountryListContainer';
import CountrySearchContainer from './CountrySearch/CountrySearchContainer';
import { connect } from 'react-redux';
import styles from './CountryList.module.scss';

const COUNTRY_SELECTED = {
    TRUE: true,
    FALSE: false,
};
class AllCountryListContainer extends Component {
    componentDidMount() {
        this.props.getWorldWide();
        this.props.getCountriesInfo()
    }

    onCountryChanged(activeCountry) {
        this.setActiveCountry(activeCountry);
        this.setIsCountrySelected(COUNTRY_SELECTED.TRUE);
    }

    render() {
        return (
            <div className={styles.countryList}>
                <CountrySearchContainer 
                {...this.props}
                onCountryChanged={this.onCountryChanged}/>
                <CountryListContainer
                    {...this.props}
                    onCountryChanged={this.onCountryChanged}
                />
            </div>
        );
    }
}

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
})(AllCountryListContainer);