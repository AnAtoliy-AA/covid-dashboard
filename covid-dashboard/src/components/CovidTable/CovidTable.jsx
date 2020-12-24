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
    const activeCountry = { ...this.props.activeCountry };
    const relativeActiveCountry = { ...this.props.relativeActiveCountry };

    this.props.setPopulationTypeValue(value);
    if (value === POPULATION_COUNT_TYPE.RELATIVE_TYPE) {
      for (let key in newWorldWideData) {
        newWorldWideData[key] = Math.floor(newWorldWideData[key]
          / WORLD_WIDE_NUMBERS.WORLD_WIDE_POPULATION
          * WORLD_WIDE_NUMBERS.POPULATION_KOEFICIENT);
      }
      this.props.setGlobalRelativeData(newWorldWideData);
      this.props.setCovidTableActiveCountryData(relativeActiveCountry);
    } else {
      this.props.setGlobalAbsoluteData(newWorldWideData);
      this.props.setCovidTableActiveCountryData(activeCountry);
    }
  }

  changeInputDay(e) {
    this.setState({isDay: !this.state.isDay});
  }

  changeInput100K(e){
    this.setState({is100k: !this.state.is100k});
    if(this.state.is100k===true){
      this.onPopulationValueChanged(POPULATION_COUNT_TYPE.RELATIVE_TYPE)
    } else{
      this.onPopulationValueChanged(POPULATION_COUNT_TYPE.ABSOLUTE_TYPE)
    }
  }

  render() {
    return (
      <div className={styles.covidTable}>Covid Table
        <hr />
        <CountryDeathsContainer checked={this.state.isDay} />
        <hr />
        <CountryRecoveredContainer checked={this.state.isDay}/>
        <hr />
        <CountryLevelContainer checked={this.state.isDay}/>
        <label>Day
          <input type='checkbox' 
                // checked={this.state.isDay}
                onChange={(e) => this.changeInputDay(e)}
          />
        </label>

        <label>By 100k
          <input type='checkbox' 
                // checked={this.state.is100k}
                onChange={(e) => this.changeInput100K(e)}
          />
        </label>


        {/* <button onClick={() => { this.onPopulationValueChanged(POPULATION_COUNT_TYPE.ABSOLUTE_TYPE) }}>Absolute</button>
        <button
          onClick={() => { this.onPopulationValueChanged(POPULATION_COUNT_TYPE.RELATIVE_TYPE) }}>By 100k</button> */}
      </div>
    )
  }
}