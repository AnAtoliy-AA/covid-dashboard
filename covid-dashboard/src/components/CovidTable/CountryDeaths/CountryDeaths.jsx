import React, { Component } from 'react';

import styles from './CountryDeaths.module.scss';

export default class CountryDeaths extends Component {
  render() {
    if(!this.props.checked){
      return(     
      <div className={styles.countryDeaths}>
          <div className={styles.styleDeaths}>New {this.props.activeCountry.country} deaths :
            {(this.props.isCountrySelected)
              ? <div className={styles.deaths}>
                {this.props.activeCountry.todayDeaths}
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
                <div className={styles.deaths}>{this.props.activeCountry.deaths}</div>
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