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
export default class CountryList extends Component {
  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`).then((response) => {
      this.props.setGlobalData(response.data.Global);
      this.props.setCountriesData(response.data.Countries);
      this.props.setCovidTableWorldWideData(response.data.Global);
    });
  }

  onCountryChanged(activeCountry) {
    this.props.setActiveCountry(activeCountry);
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${activeCountry.Country}?fullText=true`
      )
      .then((response) => {
        this.props.setPopulation(response.data[0].population);
        this.props.setFlagUrl(response.data[0].flag);
        if (
          this.props.populationValueType === POPULATION_COUNT_TYPE.RELATIVE_TYPE
        ) {
          const newActiveCountry = this.convertActiveCountryToRelativePopulationType(
            activeCountry
          );
        } else {
          this.props.setActiveCountry(activeCountry);
        }
      });
  }

  convertActiveCountryToRelativePopulationType(activeCountry) {
    activeCountry.NewDeaths = this.convertNumberToRelativePopulationType(
      activeCountry.NewDeaths
    );
    activeCountry.TotalDeaths = this.convertNumberToRelativePopulationType(
      activeCountry.TotalDeaths
    );
    activeCountry.NewRecovered = this.convertNumberToRelativePopulationType(
      activeCountry.NewRecovered
    );
    activeCountry.TotalRecovered = this.convertNumberToRelativePopulationType(
      activeCountry.TotalRecovered
    );
    activeCountry.NewConfirmed = this.convertNumberToRelativePopulationType(
      activeCountry.NewConfirmed
    );
    activeCountry.TotalConfirmed = this.convertNumberToRelativePopulationType(
      activeCountry.TotalConfirmed
    );
    console.log('RELATIVE', activeCountry);
  }

  convertNumberToRelativePopulationType(number) {
    return Math.floor(
      (number / 150000) * WORLD_WIDE_NUMBERS.POPULATION_KOEFICIENT
    );
  }

  render() {
    return (
      <div className={styles.countryList}>
        <div>
          <CountrySearchContainer />
          {this.props.countryList.map((c) => {
            return (
              <div
                key={c.CountryCode}
                className={styles.countries}
                onClick={() => {
                  this.onCountryChanged(c);
                }}
              >
                <span>{c.TotalConfirmed}</span>
                <span>{c.Country}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
