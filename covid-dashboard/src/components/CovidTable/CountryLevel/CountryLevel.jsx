import React, { Component } from 'react';

import styles from './CountryLevel.module.scss';

export default class CountryLevel extends Component {

  render() {
    return (
      <div className={styles.countryLevel}>
        <div>
          <div>{`${this.props.activeCountry.Country
            != null
            ? this.props.activeCountry.Country
            : `World`} confirmed`}</div>
          <div>{`NewConfirmed: ${this.props.activeCountry.NewConfirmed
            != null
            ? this.props.activeCountry.NewConfirmed
            : this.props.covidTableWorldWideData.NewConfirmed}`}</div>
          <div>{`TotalConfirmed: ${this.props.activeCountry.TotalConfirmed
            != null
            ? this.props.activeCountry.TotalConfirmed
            : this.props.covidTableWorldWideData.TotalConfirmed}`}</div>
          <div>{`${this.props.countryPopulation
            != null
            ? `Population: ${this.props.countryPopulation}`
            : ``}`}</div>
          <img className={styles.flag} src={this.props.countryFlag != null ? this.props.countryFlag : ''} alt="" />
        </div>
      </div>
    )
  }
}