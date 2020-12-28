import React, { Component } from 'react';

import styles from './CountryDeaths.module.scss';

export default class CountryDeaths extends Component {
  render() {
    if (this.props.checked === false) {
      return (
        <div className={styles.countryDeaths}>
          <div className={styles.styleDeaths}>New {this.props.activeCountry.country} deaths :
            {(this.props.isCountrySelected)
              ? <div className={styles.deaths}>
                {(this.props.populationValueType === 'absolute')
                  ? this.props.activeCountry.todayDeaths
                  : Math.floor(this.props.activeCountry.todayDeaths / this.props.activeCountryPopulation * 100000)}
              </div>
              : <div className={styles.deaths}>
                {this.props.covidTableWorldWideData.NewDeaths}
              </div>
            }
          </div>
        </div>)
    } else {
      return (
        <div className={styles.countryDeaths}>
          <div>
            <div>
              {(this.props.isCountrySelected)
                ? <div className={styles.styleDeaths}>{this.props.activeCountry.country} deaths :
                <div className={styles.deaths}>
                    {(this.props.populationValueType === 'absolute')
                      ? this.props.activeCountry.deaths
                      : Math.floor(this.props.activeCountry.deathsPerOneMillion / 10)}
                  </div>
                </div>
                : <div className={styles.styleDeaths}>World deaths :
                <div className={styles.deaths}>{this.props.covidTableWorldWideData.TotalDeaths}</div>
                </div>
              }
            </div>
          </div>
        </div>
      )
    }
  }
}