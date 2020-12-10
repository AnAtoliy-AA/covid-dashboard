import React, { Component } from 'react';

import styles from './CountryLevel.module.css';

export default class CountryLevel extends Component {
 
  
  render() {
        return(
         <div className={styles.countryLevel}>
         <div>
         <div>{`${this.props.country.Country} confirmed`}</div>
           <div>{`NewConfirmed: ${this.props.country.NewConfirmed}`}</div>
           <div>{`TotalConfirmed: ${this.props.country.TotalConfirmed}`}</div>
         </div>
         </div>
        )
      }
}