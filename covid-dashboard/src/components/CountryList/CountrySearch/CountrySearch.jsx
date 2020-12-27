import React, { Component } from 'react';
import styles from './CountrySearch.module.scss';

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
export default class CountrySearch extends Component {
  state = {
    searchTerm: '',
  };

  selectCountry(country) {
    this.setState({ searchTerm: country });
  }

  // onCountryChanged(activeCountry) {
  //   this.props.setActiveCountry(activeCountry);
  // }
  
  onCountryChanged(activeCountry) {
      this.setState({ searchTerm: '' });
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
      <div className={styles.countrySearch}>
        <input
          type='text'
          className={styles.search}
          placeholder='Search for a Country'
          value={this.state.searchTerm}
          onInput={(event) => this.selectCountry(event.target.value)}
        />
        <div
          className={
            this.state.searchTerm.length !== 0
              ? styles.results
              : styles.results__hide
          }
        >
          <ul className={styles.countries}>
            {this.props.countryInfoList !== undefined ? (
              this.props.countryInfoList.map((country) => {
                if (
                  country.country.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                ) {
                  return (
                    <li
                      key={country.CountryCode}
                      className={styles.countryItem}
                      onClick={() => this.onCountryChanged(country)}
                    >
                      <img
                        src={country.countryInfo.flag}
                        className={styles.countryItem_flag}
                        alt='flag'
                      />
                      <h3 className={styles.countryItem_name}>
                        {country.country}
                      </h3>
                    </li>
                  );
                }
              })
            ) : (
              <p>Something went wrong with API. Please, try again later!</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
