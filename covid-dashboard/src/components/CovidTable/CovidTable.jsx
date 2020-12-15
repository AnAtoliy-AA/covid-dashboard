import React, { Component } from 'react';

import CountryDeathsContainer from './CountryDeaths/CountryDeathsContainer';
import CountryLevelContainer from './CountryLevel/CountryLevelContainer';
import CountryRecoveredContainer from './CountryRecovered/CountryRecoveredContainer';
import styles from './CovidTable.module.scss';

const WORLD_WIDE_NUMBERS = {
  WORLD_WIDE_POPULATION: 7827000000,
  POPULATION_KOEFICIENT: 100000,
}

const POPULATION_COUNT_TYPE = {
  ABSOLUTE_TYPE: 'absolute',
  RELATIVE_TYPE: 'relative',
}

export default class CovidTable extends Component {

  onPopulationValueChanged(value) {
    this.props.setPopulationTypeValue(value);
    const newWorldWideData = { ...this.props.worldWideData };
    if (value === POPULATION_COUNT_TYPE.RELATIVE_TYPE) {
      for (let key in newWorldWideData) {
        newWorldWideData[key] = Math.floor(newWorldWideData[key]
          / WORLD_WIDE_NUMBERS.WORLD_WIDE_POPULATION
          * WORLD_WIDE_NUMBERS.POPULATION_KOEFICIENT);
      }
      console.log('absolute', newWorldWideData);
      this.props.setGlobalRelativeData(newWorldWideData);

    } else this.props.setGlobalAbsoluteData(newWorldWideData);
  }

  render() {
    return (
      <div className={styles.covidTable}>CovidTable
        <CountryDeathsContainer />
        <CountryRecoveredContainer />
        <CountryLevelContainer />
        <button onClick={() => { this.onPopulationValueChanged(POPULATION_COUNT_TYPE.ABSOLUTE_TYPE) }}>Absolute</button>
        <button
          onClick={() => { this.onPopulationValueChanged(POPULATION_COUNT_TYPE.RELATIVE_TYPE) }}>By 100k</button>
      </div>
    )
  }
}