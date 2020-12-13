import React, { Component } from 'react';

import styles from './CountryDeaths.module.scss';

export default class CountryDeaths extends Component {
  render() {
    return (
      <div className={styles.countryDeaths}>
        <div>{`${this.props.activeCountry.Country
          != null
          ? this.props.activeCountry.Country : `World`} deaths`}</div>
        <div>{`NewDeaths: ${this.props.activeCountry.NewDeaths
          != null
          ? this.props.activeCountry.NewDeaths
          : this.props.worldWideData.NewDeaths}`}</div>
        <div>{`TotalDeaths: ${this.props.activeCountry.TotalDeaths
          != null
          ? this.props.activeCountry.TotalDeaths
          : this.props.worldWideData.TotalDeaths}`}</div>
      </div>
    )
  }
}