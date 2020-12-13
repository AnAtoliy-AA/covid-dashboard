import React, { Component } from 'react';

import CountryDeathsContainer from '../CountryDeaths/CountryDeathsContainer';
import CountryLevelContainer from '../CountryLevel/CountryLevelContainer';
import CountryRecoveredContainer from '../CountryRecovered/CountryRecoveredContainer';
import styles from './CovidTable.module.scss';

export default class CovidTable extends Component {
  render() {
    return (
      <div className={styles.covidTable}>CovidTable
        <CountryDeathsContainer />
        <CountryRecoveredContainer />
        <CountryLevelContainer />
      </div>
    )
  }
}