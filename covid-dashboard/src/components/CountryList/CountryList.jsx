import * as axios from 'axios';

import React, { Component } from 'react';

import CountrySearchContainer from './CountrySearch/CountrySearchContainer';
import styles from './CountryList.module.scss';

const WORLD_WIDE_NUMBERS = {
  POPULATION_KOEFICIENT: 100000,
};

const POPULATION_COUNT_TYPE = {
  ABSOLUTE_TYPE: 'absolute',
  RELATIVE_TYPE: 'relative',
};

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
    this.props.setActiveCountry(activeCountry);
    this.props.setIsCountrySelected(COUNTRY_SELECTED.TRUE);
    const relativeActiveCountry = this.convertActiveCountryToRelativePopulationType(
      activeCountry
    );
    this.props.setActiveRelativeCountry(relativeActiveCountry);

    this.props.populationValueType === POPULATION_COUNT_TYPE.RELATIVE_TYPE
      ? this.props.setCovidTableActiveCountry(relativeActiveCountry)
      : this.props.setCovidTableActiveCountry(activeCountry);

  }

  convertActiveCountryToRelativePopulationType(activeCountry) {
    const newActiveCountry = { ...activeCountry };
    newActiveCountry.todayDeaths = this.convertNumberToRelativePopulationType(
      activeCountry.todayDeaths,
      activeCountry.population
    );
    newActiveCountry.deaths = this.convertNumberToRelativePopulationType(
      activeCountry.deaths,
      activeCountry.population
    );
    newActiveCountry.todayRecovered = this.convertNumberToRelativePopulationType(
      activeCountry.todayRecovered,
      activeCountry.population
    );
    newActiveCountry.recovered = this.convertNumberToRelativePopulationType(
      activeCountry.recovered,
      activeCountry.population
    );
    newActiveCountry.todayCases = this.convertNumberToRelativePopulationType(
      activeCountry.todayCases,
      activeCountry.population
    );
    newActiveCountry.cases = this.convertNumberToRelativePopulationType(
      activeCountry.cases,
      activeCountry.population
    );

    return newActiveCountry;
  }

  convertNumberToRelativePopulationType(number, population) {
    return Math.floor(
      (number / population) * WORLD_WIDE_NUMBERS.POPULATION_KOEFICIENT
    );
  }

  render() {
    return (
      <div className={styles.countryList}>
        <div>
          <CountrySearchContainer />
          {this.props.countryInfoList !== undefined ? (
            this.props.countryInfoList.map((c) => {
              return (
                <div key={c.country}>
                  <div
                    className={styles.countries}
                    onClick={() => {
                      this.onCountryChanged(c);
                    }}
                  >
                    <img
                      alt='logo'
                      src={c.countryInfo.flag}
                      className={styles.countryItem_flag}
                    />
                    <span className={styles.totalConfirmed}>
                      {c.cases}
                    </span>
                    <span>{c.country}</span>
                  </div>
                  <hr />
                </div>
              );
            })
          ) : (
              <p>Something went wrong with API. Please, try again later!</p>
            )}
        </div>
      </div>
    );
  }
}
