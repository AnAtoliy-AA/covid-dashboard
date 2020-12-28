import * as axios from 'axios';

import React, { Component } from 'react';

import CountrySearchContainer from './CountrySearch/CountrySearchContainer';
import ListCountryConteiner from './ListCountry/ListCountryConteiner';
import styles from './CountryList.module.scss';

// const WORLD_WIDE_NUMBERS = {
//   POPULATION_KOEFICIENT: 100000,
// };

// const POPULATION_COUNT_TYPE = {
//   ABSOLUTE_TYPE: 'absolute',
//   RELATIVE_TYPE: 'relative',
// };

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
    debugger
    // const relativeActiveCountry = this.convertActiveCountryToRelativePopulationType(
    //   activeCountry
    //   );
    //   debugger
    // this.setActiveRelativeCountry(relativeActiveCountry);

    // this.populationValueType === POPULATION_COUNT_TYPE.RELATIVE_TYPE
      // ? this.setCovidTableActiveCountry(relativeActiveCountry)
    //   : this.setCovidTableActiveCountry(activeCountry);
    //   console.log(activeCountry)

  }

  // convertActiveCountryToRelativePopulationType(activeCountry) {
  //   const newActiveCountry = { ...activeCountry };
  //   newActiveCountry.todayDeaths = this.convertNumberToRelativePopulationType(
  //     activeCountry.todayDeaths,
  //     activeCountry.population
  //   );
  //   newActiveCountry.deaths = this.convertNumberToRelativePopulationType(
  //     activeCountry.deaths,
  //     activeCountry.population
  //   );
  //   newActiveCountry.todayRecovered = this.convertNumberToRelativePopulationType(
  //     activeCountry.todayRecovered,
  //     activeCountry.population
  //   );
  //   newActiveCountry.recovered = this.convertNumberToRelativePopulationType(
  //     activeCountry.recovered,
  //     activeCountry.population
  //   );
  //   newActiveCountry.todayCases = this.convertNumberToRelativePopulationType(
  //     activeCountry.todayCases,
  //     activeCountry.population
  //   );
  //   newActiveCountry.cases = this.convertNumberToRelativePopulationType(
  //     activeCountry.cases,
  //     activeCountry.population
  //   );

  //   return newActiveCountry;
  // }

  // convertNumberToRelativePopulationType(number, population) {
  //   return Math.floor(
  //     (number / population) * WORLD_WIDE_NUMBERS.POPULATION_KOEFICIENT
  //   );
  // }

  render() {
    return (
      <div className={styles.countryList}>
          <CountrySearchContainer />
          <ListCountryConteiner
          {...this.props}
           onCountryChanged={this.onCountryChanged}
          //  convertActiveCountryToRelativePopulationType={this.convertActiveCountryToRelativePopulationType}
            />
      </div>
    );
  }
}
