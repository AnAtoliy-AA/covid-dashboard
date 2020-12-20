import React, { Component } from 'react';

import styles from './CountryRecovered.module.scss';

export default class CountryRecovered extends Component {


  render() {
    return (
      <div className={styles.countryRecovered}>
        <div>
          <div>
            {(this.props.isCountrySelected === 'true')
            ? <div className={styles.styleRecovered}>{this.props.activeCountry.Country} recovered :
                <div className={styles.recovered}>{this.props.activeCountry.TotalRecovered}</div>
              </div>
            : <div className={styles.styleRecovered}>World recovered :
                <div className={styles.recovered}>{this.props.covidTableWorldWideData.TotalRecovered}</div>
              </div>
            } 
          </div>
          <div className={styles.styleRecovered}>New recovered : 
            {(this.props.isCountrySelected === 'true')
            ? <div className={styles.recovered}>
                {this.props.activeCountry.NewRecovered}
              </div>
            : <div className={styles.recovered}>
                {this.props.covidTableWorldWideData.NewRecovered}
              </div>
           }
          </div>
        </div>
      </div>
    )
  }
}