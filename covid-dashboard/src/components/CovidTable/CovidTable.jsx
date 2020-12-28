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

  constructor(props) {
    super(props);
    this.state = {
      isDay: true,
      is100k: true,
    };
  }

  onPopulationValueChanged(value) {
    const newWorldWideData = { ...this.props.worldWideData };

    this.props.setPopulationTypeValue(value);
    if (value === POPULATION_COUNT_TYPE.RELATIVE_TYPE) {
      for (let key in newWorldWideData) {
        newWorldWideData[key] = Math.floor(newWorldWideData[key]
          / WORLD_WIDE_NUMBERS.WORLD_WIDE_POPULATION
          * WORLD_WIDE_NUMBERS.POPULATION_KOEFICIENT);
      }
      this.props.setGlobalRelativeData(newWorldWideData);
    } else {
      this.props.setGlobalAbsoluteData(newWorldWideData);
    }
  }

  changeInputDay() {
    this.setState({ isDay: !this.state.isDay });
    (this.state.isDay)
      ? this.props.setIsLastDaySelected(true)
      : this.props.setIsLastDaySelected(false)
  }

  changeInput100K() {
    this.setState({ is100k: !this.state.is100k });
    (this.state.is100k)
      ? this.onPopulationValueChanged(POPULATION_COUNT_TYPE.RELATIVE_TYPE)
      : this.onPopulationValueChanged(POPULATION_COUNT_TYPE.ABSOLUTE_TYPE);
      (this.state.is100k)
      ? this.props.setIsRelativePopulationSeleted(true)
      : this.props.setIsRelativePopulationSeleted(false)
  }

  render() {
    return (
      <div className={styles.covidTable}>Covid Table
        <hr />
        <CountryDeathsContainer checked={this.state.isDay} />
        <hr />
        <CountryRecoveredContainer checked={this.state.isDay} />
        <hr />
        <CountryLevelContainer checked={this.state.isDay} />
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