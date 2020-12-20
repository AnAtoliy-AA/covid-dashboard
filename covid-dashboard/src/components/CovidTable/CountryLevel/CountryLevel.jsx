import React, { Component } from 'react';

import styles from './CountryLevel.module.scss';

export default class CountryLevel extends Component {

  render() {
    return (
      <div className={styles.countryLevel}>
        <div>
          <div>
            {(this.props.isCountrySelected === 'true')
              ? <div className={styles.styleConfirmed}>{this.props.activeCountry.Country} confirmed :
                <div className={styles.confirmed}>{this.props.activeCountry.TotalConfirmed}</div>
              </div>
              : <div className={styles.styleConfirmed}>World confirmed :
                <div className={styles.confirmed}>{this.props.covidTableWorldWideData.TotalConfirmed}</div>
              </div>
            }
          </div>
          <div className={styles.styleConfirmed}>New confirmed :
            {(this.props.isCountrySelected === 'true')
              ? <div className={styles.confirmed}>
                {this.props.activeCountry.NewConfirmed}
              </div>
              : <div className={styles.confirmed}>
                {this.props.covidTableWorldWideData.NewConfirmed}
              </div>
            }
          </div>

          <div className={styles.styleConfirmed}>
            {this.props.countryPopulation
              != null
              ? <div className={styles.styleConfirmed}>Population: <div className={styles.confirmed}> {this.props.countryPopulation}

              </div>
              </div>
              : ``
            }
            <img className={styles.flag} src={this.props.countryFlag} alt="" />
          </div>
        </div>
      </div>
    )
  }
}