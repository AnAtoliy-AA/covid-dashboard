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
        <CountrySearchContainer />
        <ListCountryConteiner
          {...this.props}
          onCountryChanged={this.onCountryChanged}
        />
      </div>
    );
  }
}
