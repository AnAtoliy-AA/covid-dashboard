import React, { Component } from 'react';

import CountryDeathsContainer from './CountryDeaths/CountryDeathsContainer';
import CountryLevelContainer from './CountryLevel/CountryLevelContainer';
import CountryRecoveredContainer from './CountryRecovered/CountryRecoveredContainer';
import styles from './CovidTable.module.scss';

export default class CovidTable extends Component {

  // componentDidMount(){
  //   const newGlobal = { ...this.props.global };
  //   this.props.setGlobalRelativeData(newGlobal);
  // }

  onPopulationValueChanged(value) {
    this.props.setPopulationTypeValue(value);
    const newGlobal = { ...this.props.global };
    if (value === 'relative') {
      for (let key in newGlobal) {
        newGlobal[key] = Math.floor(newGlobal[key] / 7827000000 * 100000);
      }
      console.log('absolute', newGlobal);
      this.props.setGlobalRelativeData(newGlobal);

    } else this.props.setGlobalAbsoluteData(newGlobal);
  }

  // onRelativeValueChanged() {

  //   console.log('relative');
  //     }
  render() {
    return (
      <div className={styles.covidTable}>CovidTable
        <CountryDeathsContainer />
        <CountryRecoveredContainer />
        <CountryLevelContainer />
        <button onClick={() => { this.onPopulationValueChanged('absolute') }}>Absolute</button>
        <button
          onClick={() => { this.onPopulationValueChanged('relative') }}>By 100k</button>
      </div>
    )
  }
}