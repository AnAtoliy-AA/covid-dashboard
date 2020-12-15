import React, { Component } from 'react';
import styles from './CountrySearch.module.scss';

export default class CountrySearch extends Component {
  render() {
    return (
      <div className={styles.countrySearch}>
        <input
          type='text'
          className={styles.search}
          placeholder='Search for a Country'
        />
        <div>
          <ul className={styles.countries}>
            {this.props.countryList.map((country) => {
              return (
                <li key={country.CountryCode} className={styles.countryItem}>
                  <img
                    src={`https://www.countryflags.io/${country.CountryCode}/shiny/64.png`}
                    className={styles.countryItem_flag}
                  />
                  <h3 className={styles.countryItem_name}>{country.Country}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
