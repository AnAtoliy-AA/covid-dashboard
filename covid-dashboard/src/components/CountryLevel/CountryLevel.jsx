import React, { Component } from 'react';

import styles from './CountryLevel.module.css';

export default class CountryLevel extends Component {
 
  
  render() {
        return(
         <div className={styles.countryLevel}>CountryLevel
         
         <div>
           {console.log('here:', this.props.country.Country)}
           {this.props.country.Country}
         </div>
         </div>
        )
      }
}