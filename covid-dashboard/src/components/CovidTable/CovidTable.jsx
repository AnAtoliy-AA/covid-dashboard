import React, { Component } from 'react';

import CountryDeathsContainer from './CountryDeaths/CountryDeathsContainer';
import CountryLevelContainer from './CountryLevel/CountryLevelContainer';
import CountryRecoveredContainer from './CountryRecovered/CountryRecoveredContainer';
import styles from './CovidTable.module.scss';

const WORLD_WIDE_NUMBERS = {
  WORLD_WIDE_POPULATION: 7827000000,
  POPULATION_KOEFICIENT: 100000,
}

export default class CovidTable extends Component {
  onPopulationValueChanged() {
    const newWorldWideData = { ...this.props.worldWideData };

    if (!this.props.isRelativePopulationSeleted) {
      for (let key in newWorldWideData) {
        newWorldWideData[key] = Math.floor(newWorldWideData[key]
          / WORLD_WIDE_NUMBERS.WORLD_WIDE_POPULATION
          * WORLD_WIDE_NUMBERS.POPULATION_KOEFICIENT);
      }
      this.props.setCovidTableWorldWideData(newWorldWideData);
    } else {
      this.props.setCovidTableWorldWideData(newWorldWideData);
    }
  }

  changeInputDay() {
    this.props.setIsLastDaySelected(!this.props.isLastDaySelected)
  }

  changeInput100K() {
    this.props.setIsRelativePopulationSeleted(!this.props.isRelativePopulationSeleted)
    this.onPopulationValueChanged();
  }

  render() {
    return (
      <div className={styles.covidTable}>Covid Table
        <hr />
        <CountryDeathsContainer />
        <hr />
        <CountryRecoveredContainer />
        <hr />
        <CountryLevelContainer />
        <label>Day
          <input type='checkbox'
            onChange={() => this.changeInputDay()}
          />
        </label>
        <label>By 100k
          <input type='checkbox'
            onChange={() => this.changeInput100K()}
          />
        </label>
      </div>
    )
  }
}