import * as axios from 'axios';

import React, { Component } from 'react';

import styles from './Cases.module.css';

export default class Cases extends Component {
  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`)
      .then(response => {
        this.props.setCountriesData(response.data.Countries);
      });
  }

  render() {
    return (
      <div className={styles.cases}>
        <div>
          {this.props.countries.map(c => {
            return <div key={c.CountryCode}>
              <span>{c.TotalConfirmed}</span>
              <span>{c.Country}</span>
            </div>
          })}
        </div>

      </div>
    )
  }
}