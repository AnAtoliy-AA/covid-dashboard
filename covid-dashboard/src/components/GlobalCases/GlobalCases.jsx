import React, { Component } from 'react';

import styles from './GlobalCases.module.scss';

export default class GlobalCases extends Component {
  render() {
    return (
      <div className={styles.globalCases}>
        Global Cases
        <div className={styles.cases}>
          {this.props.worldWideData.TotalConfirmed}
        </div>
      </div>
    );
  }
}
