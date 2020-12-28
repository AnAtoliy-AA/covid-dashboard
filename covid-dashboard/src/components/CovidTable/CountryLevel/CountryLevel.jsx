import React, { Component } from 'react';

import styles from './CountryLevel.module.scss';

export default class CountryLevel extends Component {

  render() {

    if (this.props.checked === false) {
      return (
        <div className={styles.countryDeaths}>
          <div className={styles.styleConfirmed}>New {this.props.activeCountry.country} confirmed :
             {(this.props.isCountrySelected)
              ? <div className={styles.confirmed}>
                {(this.props.populationValueType === 'absolute') ? this.props.activeCountry.todayRecovered : Math.floor(this.props.activeCountry.todayRecovered / this.props.activeCountryPopulation * 100000)}
              </div>
              : <div className={styles.confirmed}>
                {this.props.covidTableWorldWideData.NewConfirmed}
              </div>
            }
          </div>
        </div>)
    } else {
      return (
        <div className={styles.countryLevel}>
          <div>
            {(this.props.isCountrySelected)
              ? <div className={styles.styleConfirmed}>{this.props.activeCountry.country} Confirmed :
                  <div className={styles.confirmed}>
                  {(this.props.populationValueType === 'absolute') ? this.props.activeCountry.cases : Math.floor(this.props.activeCountry.casesPerOneMillion / 10)}
                </div>
              </div>
              : <div className={styles.styleConfirmed}>World confirmed :
                  <div className={styles.confirmed}>{this.props.covidTableWorldWideData.TotalConfirmed}</div>
              </div>
            }
          </div>
        </div>
      )
    }



  }
}