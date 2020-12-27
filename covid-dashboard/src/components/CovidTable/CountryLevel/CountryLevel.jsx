import React, { Component } from 'react';

import styles from './CountryLevel.module.scss';

export default class CountryLevel extends Component {

  render() {

    if(this.props.checked===false){
      return(     
      <div className={styles.countryDeaths}>
          <div className={styles.styleConfirmed}>New {this.props.activeCountry.country} confirmed :
             {(this.props.isCountrySelected)
             ? <div className={styles.confirmed}>
                 {this.props.activeCountry.todayCases}
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
                  <div className={styles.confirmed}>{this.props.activeCountry.cases}</div>
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