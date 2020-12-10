import React, { Component } from 'react';

import styles from './GlobalDeaths.module.scss';

export default class GlobalDeaths extends Component {
  render() {
    return (
      <div className={styles.globalDeaths}>
        <div>{`${this.props.country.Country
          != null
          ? this.props.country.Country : `World`} deaths`}</div>
        <div>{`NewDeaths: ${this.props.country.NewDeaths
          != null
          ? this.props.country.NewDeaths
          : this.props.global.NewDeaths}`}</div>
        <div>{`TotalDeaths: ${this.props.country.TotalDeaths
          != null
          ? this.props.country.TotalDeaths
          : this.props.global.TotalDeaths}`}</div>
      </div>
    )
  }
}