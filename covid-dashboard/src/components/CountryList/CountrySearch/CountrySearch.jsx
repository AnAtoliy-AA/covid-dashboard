import React, { Component } from 'react';

import styles from './CountrySearch.module.scss';

export default class CountrySearch extends Component {
  state = {
    searchTerm: '',
  };

  selectCountry(country) {
    this.setState({ searchTerm: country });
  }

  onCountryChanged(activeCountry) {
    this.props.setActiveCountry(activeCountry);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <div className={styles.countrySearch}>
        <input
          type='text'
          className={styles.search}
          placeholder='Search for a Country'
          value={this.state.searchTerm}
          onInput={(event) => this.selectCountry(event.target.value)}
        />
        <div
          className={
            this.state.searchTerm.length !== 0
              ? styles.results
              : styles.results__hide
          }
        >
          <ul className={styles.countries}>
            {this.props.countryInfoList !== undefined ? (
              this.props.countryInfoList.map((country) => {
                if (
                  country.country.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                ) {
                  return (
                    <li
                      key={country.CountryCode}
                      className={styles.countryItem}
                      onClick={() => this.onCountryChanged(country)}
                    >
                      <img
                        src={country.countryInfo.flag}
                        className={styles.countryItem_flag}
                        alt='flag'
                      />
                      <h3 className={styles.countryItem_name}>
                        {country.country}
                      </h3>
                    </li>
                  );
                }
              })
            ) : (
              <p>Something went wrong with API. Please, try again later!</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
