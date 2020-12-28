import * as axios from 'axios';

import React, { Component } from 'react';

import CountrySearchContainer from './CountrySearch/CountrySearchContainer';
import ListCountryConteiner from './ListCountry/ListCountryConteiner';
import styles from './CountryList.module.scss';

const COUNTRY_SELECTED = {
  TRUE: true,
  FALSE: false,
};
export default class CountryList extends Component {
  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`).then((response) => {
      this.props.setGlobalData(response.data.Global);
      this.props.setCovidTableWorldWideData(response.data.Global);
    });
    axios.get(`https://disease.sh/v3/covid-19/countries`).then((response) => {
      this.props.setCountriesInfoData(response.data);
    });
  }

  onCountryChanged(activeCountry) {
    this.setActiveCountry(activeCountry);
    this.setIsCountrySelected(COUNTRY_SELECTED.TRUE);
  }

  render() {
    return (
      <div className={styles.countryList}>
        <CountrySearchContainer />
        <ListCountryConteiner
          {...this.props}
          onCountryChanged={this.onCountryChanged}
        />
      </div>
    );
  }
}
