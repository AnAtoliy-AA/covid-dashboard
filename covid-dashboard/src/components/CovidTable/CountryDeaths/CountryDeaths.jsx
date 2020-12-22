import React, { Component } from 'react';

import styles from './CountryDeaths.module.scss';

export default class CountryDeaths extends Component {
  render() {
    return (
      <div className={styles.countryDeaths}>
        <div>
          <div>
            {(this.props.isCountrySelected)
              ? <div className={styles.styleDeaths}>{this.props.activeCountry.Country} deaths :
                <div className={styles.deaths}>{this.props.activeCountry.TotalDeaths}</div>
              </div>
              : <div className={styles.styleDeaths}>World deaths :
                <div className={styles.deaths}>{this.props.covidTableWorldWideData.TotalDeaths}</div>
              </div>
            }
          </div>
          <div className={styles.styleDeaths}>New deaths :
            {(this.props.isCountrySelected)
              ? <div className={styles.deaths}>
                {this.props.activeCountry.NewDeaths}
              </div>
              : <div className={styles.deaths}>
                {this.props.covidTableWorldWideData.NewDeaths}
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}