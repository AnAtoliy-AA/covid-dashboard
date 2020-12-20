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
    console.log('componentDidMount');
    console.log(this.props.activeCountry);
    this.getGlobalCasesData();
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
    if (this.props.activeCountry.Slug !== prevProps.activeCountry.Slug)
      this.getCountryCasesData();
  }

  getGlobalCasesData(indicator = 'cases') {
    console.log('global');

    axios
      .get('https://disease.sh/v3/covid-19/historical/all?lastdays=366')
      .then((response) => {
        this.setState({
          globalCases: {
            chartData: {
              labels: Object.keys(response.data[indicator]),
              datasets: [
                {
                  label: 'Global cases',
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

  getCountryCasesData(indicator = 'confirmed') {
    console.log('country');

    console.log(this.props.activeCountry.Slug);
    console.log(indicator);

    axios
      .get(
        `https://api.covid19api.com/dayone/country/${this.props.activeCountry.Slug}/status/${indicator}`
      )
      .then((response) => {
        this.setState({
          globalCases: {
            chartData: {
              labels: response.data.map((item) =>
                new Date(item.Date).toString().substring(4, 15)
              ),
              datasets: [
                {
                  label: ' Country cases',
                  data: response.data.map((item) => item.Cases),
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
    return (
      <div className={styles.covidGraph}>
        <Line data={this.state.globalCases.chartData} />
        <div>
          <button
            id='cases'
            onClick={(event) =>
              this.props.activeCountry
                ? this.getCountryCasesData(event.target.innerText)
                : this.getGlobalCasesData(event.target.id)
            }
          >
            confirmed
          </button>
          <button
            id='deaths'
            onClick={(event) =>
              this.props.activeCountry
                ? this.getCountryCasesData(event.target.id)
                : this.getGlobalCasesData(event.target.id)
            }
          >
            deaths
          </button>
          <button
            id='recovered'
            onClick={(event) =>
              this.props.activeCountry
                ? this.getCountryCasesData(event.target.id)
                : this.getGlobalCasesData(event.target.id)
            }
          >
            recovered
          </button>
        </div>
      </div>
    );
  }
}
