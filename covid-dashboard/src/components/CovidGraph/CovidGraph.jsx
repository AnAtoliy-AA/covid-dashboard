import { Bar, Line } from 'react-chartjs-2';
import React, { Component } from 'react';

import axios from 'axios';
import styles from './CovidGraph.module.scss';

export default class CovidGraph extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    // this.isDaily = false;
    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    this.getGlobalCasesData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeCountry.country !== prevProps.activeCountry.country)
      this.getCountryCasesData();
  }

  getGlobalCasesData(indicator = 'cases') {
    axios
      .get('https://disease.sh/v3/covid-19/historical/all?lastdays=366')
      .then((response) => {
        // this.isDaily
       (!this.props.isLastDaySelected)
          ? this.setState({
              chartData: {
                data: {
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
                      backgroundColor: '#F2AA16',
                      borderColor: '#F2AA16',
                      borderWidth: 1,
                    },
                  ],
                },
                options: {
                  title: {
                    display: true,
                    text: 'Global daily cases',
                    fontColor: '#bdbdbd',
                  },
                  legend: { display: false },
                  scales: {
                    xAxes: [
                      {
                        type: 'time',
                        time: {
                          unit: 'day',
                          unitStepSize: 30,
                        },
                        ticks: {
                          autoSkip: false,
                          maxRotation: 0,
                          minRotation: 0,
                          fontColor: '#bdbdbd',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        ticks: { fontColor: '#bdbdbd' },
                      },
                    ],
                  },
                },
              },
            })
          : this.setState({
              chartData: {
                data: {
                  labels: Object.keys(response.data[indicator]),
                  datasets: [
                    {
                      label: 'Global cases',
                      data: Object.values(response.data[indicator]),
                      pointBorderColor: '#F2AA16',
                      pointBackgroundColor: '#F2AA16',
                      pointWidth: 1,
                    },
                  ],
                },
                options: {
                  title: {
                    display: true,
                    text: 'Global cases',
                    fontColor: '#bdbdbd',
                  },
                  legend: { display: false },

                  scales: {
                    xAxes: [
                      {
                        type: 'time',
                        time: {
                          unit: 'day',
                          unitStepSize: 30,
                        },

                        ticks: {
                          autoSkip: false,
                          maxRotation: 0,
                          minRotation: 0,
                          fontColor: '#bdbdbd',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        ticks: {
                          callback: (value) => `${value / 10e6}M`,
                          fontColor: '#bdbdbd',
                        },
                      },
                    ],
                  },
                },
              },
            });
      });
  }

  getCountryCasesData(indicator = 'confirmed') {
    axios
      .get(
        `https://api.covid19api.com/dayone/country/${this.props.activeCountry.country}/status/${indicator}`
      )
      .then((response) => {
        // this.isDaily
        (this.props.isLastDaySelected)
          ? this.setState({
              chartData: {
                data: {
                  labels: response.data.map((item) =>
                    new Date(item.Date).toString().substring(4, 11)
                  ),
                  datasets: [
                    {
                      label: `${this.props.activeCountry.country} daily cases`,
                      data: response.data
                        .map((item) => item.Cases)
                        .map((item, index, arr) => {
                          if (arr[index + 1] > arr[index])
                            return arr[index + 1] - arr[index];
                        }),
                      backgroundColor: '#F2AA16',
                      borderColor: '#F2AA16',
                      borderWidth: 1,
                    },
                  ],
                },
                options: {
                  title: {
                    display: true,
                    text: `${this.props.activeCountry.country} daily cases`,
                    fontColor: '#bdbdbd',
                  },
                  legend: { display: false },
                  scales: {
                    xAxes: [
                      {
                        type: 'time',
                        time: {
                          unit: 'day',
                          unitStepSize: 30,
                        },
                        ticks: {
                          autoSkip: false,
                          maxRotation: 0,
                          minRotation: 0,
                          fontColor: '#bdbdbd',
                        },
                      },
                    ],
                    yAxes: [{ ticks: { fontColor: '#bdbdbd' } }],
                  },
                },
              },
            })
          : this.setState({
              chartData: {
                data: {
                  labels: response.data.map((item) =>
                    new Date(item.Date).toString().substring(4, 11)
                  ),
                  datasets: [
                    {
                      label: 'Country cases',
                      data: response.data.map((item) => item.Cases),
                      pointBorderColor: '#F2AA16',
                      pointBackgroundColor: '#F2AA16',
                      pointWidth: 1,
                    },
                  ],
                },
                options: {
                  title: {
                    display: true,
                    text: `${this.props.activeCountry.country}  cases`,
                    fontColor: '#bdbdbd',
                  },
                  legend: { display: false },
                  scales: {
                    xAxes: [
                      {
                        type: 'time',
                        time: {
                          unit: 'day',
                          unitStepSize: 30,
                        },
                        ticks: {
                          autoSkip: false,
                          maxRotation: 0,
                          minRotation: 0,
                          fontColor: '#bdbdbd',
                        },
                      },
                    ],
                    yAxes: [{ ticks: { fontColor: '#bdbdbd' } }],
                  },
                },
              },
            });
      });
  }

  // changeInput(e) {
  //   const target = e.target;
  //   this.isDaily = target.type === 'checkbox' ? target.checked : target.value;
  // }

  render() {
    return (
      <div className={styles.covidGraph}>
         {/* {this.isDaily ? ( */}
        {this.props.isLastDaySelected? (
          <Bar
            data={this.state.chartData.data}
            options={this.state.chartData.options}
            width={'100%'}
            height={'100%'}
          />
        ) : (
          <Line
            data={this.state.chartData.data}
            options={this.state.chartData.options}
            // width={'100%'}
            // height={'100%'}
          />
        )}
        {/* <div>
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
        </div> */}
      </div>
    );
  }
}
