import React, { Component } from 'react';

import styles from './CountryRecovered.module.scss';

export default class CountryRecovered extends Component {

  render() {
    if (!this.props.checked) {
      return (
        <div className={styles.countryRecovered}>
          <div className={styles.styleRecovered}>New {this.props.activeCountry.country} recovered :
              {(this.props.isCountrySelected)
              ? <div className={styles.recovered}>
                {(this.props.populationValueType === 'absolute')
                  ? this.props.activeCountry.todayRecovered
                  : Math.floor(this.props.activeCountry.todayRecovered / this.props.activeCountryPopulation * 100000)}
              </div>
              : <div className={styles.recovered}>
                {this.props.covidTableWorldWideData.NewRecovered}
              </div>
            }
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.countryRecovered}>
          <div>
            {(this.props.isCountrySelected)
              ? <div className={styles.styleRecovered}>{this.props.activeCountry.country} recovered :
                    <div className={styles.recovered}>
                  {/* TODO */}
                  {(this.props.populationValueType === 'absolute')
                    ? this.props.activeCountry.recovered
                    : Math.floor(this.props.activeCountry.recoveredPerOneMillion / 10)}
                </div></div>
              : <div className={styles.styleRecovered}>World recovered :
                    <div className={styles.recovered}>{this.props.covidTableWorldWideData.TotalRecovered}</div></div>
            }
          </div>
        </div>
      )
    }
  }
}
