import React, { Component } from 'react';

import styles from './CountryRecovered.module.scss';

export default class CountryRecovered extends Component {


  render() {
    return (
      <div className={styles.countryRecovered}>

        <div>
          <div>{`${this.props.activeCountry.Country
            != null
            ? this.props.activeCountry.Country
            : `World`} recovered`}</div>
          <div>{`NewRecovered: ${this.props.activeCountry.NewRecovered
            != null
            ? this.props.activeCountry.NewRecovered
            : this.props.covidTableWorldWideData.NewRecovered}`}</div>
          <div>{`TotalRecovered: ${this.props.activeCountry.TotalRecovered
            != null ? this.props.activeCountry.TotalRecovered
            : this.props.covidTableWorldWideData.TotalRecovered}`}</div>
        </div>
      </div>
    )
  }
}