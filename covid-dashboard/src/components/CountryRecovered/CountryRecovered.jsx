import React, { Component } from 'react';

import styles from './CountryRecovered.module.css';

export default class CountryRecovered extends Component {
 
  
  render() {
        return(
         <div className={styles.countryRecovered}>
         
         <div>
           <div>{`${this.props.country.Country} recovered`}</div>
           <div>{`NewRecovered: ${this.props.country.NewRecovered}`}</div>
           <div>{`TotalRecovered: ${this.props.country.TotalRecovered}`}</div>
         </div>
         </div>
        )
      }
}