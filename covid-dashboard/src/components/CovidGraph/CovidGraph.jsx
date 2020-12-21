import React, { Component } from 'react';
import axios from 'axios';

import { Bar, Line } from 'react-chartjs-2';

import styles from './CovidGraph.module.scss';

export default class CovidGraph extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.isDaily = false;

    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    this.getGlobalCasesData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeCountry.Slug !== prevProps.activeCountry.Slug)
      this.getCountryCasesData();
  }

  getGlobalCasesData(indicator = 'cases') {
    axios
      .get('https://disease.sh/v3/covid-19/historical/all?lastdays=366')
      .then((response) => {
        this.isDaily
          ? this.setState({
              chartData: {
                labels: Object.keys(response.data[indicator]),
                datasets: [
                  {
                    label: 'Global daily cases',
                    data: Object.values(response.data[indicator]).map(
                      (item, index, arr) => {
                        if (arr[index + 1] > arr[index])
                          return arr[index + 1] - arr[index];
                      }
                    ),
                    backgroundColor: ['rgba(255, 255, 255, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                  },
                ],
              },
            })
          : this.setState({
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
            });
      });
  }

  getCountryCasesData(indicator = 'confirmed') {
    axios
      .get(
        `https://api.covid19api.com/dayone/country/${this.props.activeCountry.Slug}/status/${indicator}`
      )
      .then((response) => {
        this.isDaily
          ? this.setState({
              chartData: {
                labels: response.data.map((item) =>
                  new Date(item.Date).toString().substring(4, 15)
                ),
                datasets: [
                  {
                    label: 'Country daily cases',
                    data: response.data
                      .map((item) => item.Cases)
                      .map((item, index, arr) => {
                        if (arr[index + 1] > arr[index])
                          return arr[index + 1] - arr[index];
                      }),
                    backgroundColor: ['rgba(255, 255, 255, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                  },
                ],
              },
            })
          : this.setState({
              chartData: {
                labels: response.data.map((item) =>
                  new Date(item.Date).toString().substring(4, 15)
                ),
                datasets: [
                  {
                    label: 'Country cases',
                    data: response.data.map((item) => item.Cases),
                    backgroundColor: ['rgba(255, 255, 255, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                  },
                ],
              },
            });
      });
  }

  changeInput(e) {
    const target = e.target;
    this.isDaily = target.type === 'checkbox' ? target.checked : target.value;
  }

  render() {
    return (
      <div className={styles.covidGraph}>
        {this.isDaily ? (
          <Bar data={this.state.chartData} />
        ) : (
          <Line data={this.state.chartData} />
        )}
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
          <label>
            Daily
            <input
              type='checkbox'
              ref={this.input}
              onChange={(e) => this.changeInput(e)}
            />
          </label>
        </div>
      </div>
    );
  }
}
