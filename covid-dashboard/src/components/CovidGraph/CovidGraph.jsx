import React, { Component } from 'react';
import axios from 'axios';

import { Bar, Line } from 'react-chartjs-2';

import styles from './CovidGraph.module.scss';

export default class CovidGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalCases: {
        chartData: {},
      },
    };
  }

  componentDidMount() {
    this.getGlobalCasesData();
  }

  getGlobalCasesData(indicator = 'cases') {
    axios
      .get('https://disease.sh/v3/covid-19/historical/all?lastdays=366')
      .then((response) => {
        this.setState({
          globalCases: {
            chartData: {
              labels: Object.keys(response.data[indicator]),
              datasets: [
                {
                  label: 'Cases',
                  data: Object.values(response.data[indicator]).map(
                    (item) => item / 1000000
                  ),
                  backgroundColor: ['rgba(255, 255, 255, 0.2)'],
                  borderColor: ['rgba(255, 99, 132, 1)'],
                  borderWidth: 1,
                },
              ],
            },
          },
        });
      });
  }

  render() {
    console.log(this.props.activeCountry);

    return (
      <div className={styles.covidGraph}>
        <Line data={this.state.globalCases.chartData} />
      </div>
    );
  }
}
