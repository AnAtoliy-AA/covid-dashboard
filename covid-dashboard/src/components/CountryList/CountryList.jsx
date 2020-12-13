import * as axios from 'axios';

import React, { Component } from 'react';

import styles from './CountryList.module.scss';

export default class CountryList extends Component {
  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`)
      .then(response => {
        this.props.setGlobalData(response.data.Global);
        this.props.setCountriesData(response.data.Countries);
        // this.props.setCovidTableData(response.data.Global);
      });
  }

  onCountryChanged(activeCountry) {
    this.props.setActiveCountry(activeCountry);
    axios.get(`https://restcountries.eu/rest/v2/name/${activeCountry.Country}?fullText=true`)
      .then(response => {
        this.props.setPopulation(response.data[0].population);
        this.props.setFlagUrl(response.data[0].flag);
      });
  }

  render() {
    return (
      <div className={styles.countryList}>
        <div>
          {this.props.countryList.map(c => {
            return <div
              key={c.CountryCode}
              className={styles.countries}
              onClick={() => { this.onCountryChanged(c) }}>
              <span>{c.TotalConfirmed}</span>
              <span>{c.Country}</span>
            </div>
          })}
        </div>
      </div>
    )
  }
}