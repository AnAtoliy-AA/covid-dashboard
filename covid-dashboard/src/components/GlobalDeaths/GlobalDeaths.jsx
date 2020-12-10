import React, { Component } from 'react';

import styles from './GlobalDeaths.module.css';

export default class GlobalDeaths extends Component {
  render() {
    return (
      <div className={styles.globalDeaths}>
         <div>{`${this.props.country.Country} deaths`}</div>
        <div>{`NewDeaths: ${this.props.country.NewDeaths}`}</div>
        <div>{`TotalDeaths: ${this.props.country.TotalDeaths}`}</div>
      </div>
    )
  }
}