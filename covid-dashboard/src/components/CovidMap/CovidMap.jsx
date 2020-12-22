import { Circle, LayerGroup, MapContainer, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';

import styles from './CovidMap.module.css';

const COVID_CASES_NUMBERS = {
  CASES_CIRCLE_RADIUS_KOEFICIENT: 10,
  CASES_CIRCLE_COLOR_KOEFICIENT: 1000000,
}
export default class CovidMap extends Component {

  render() {
    const fillRedOptions = { color: 'red', fillColor: 'red' }
    const fillYellowOptions = { color: 'red', fillColor: 'yellow' }
    return (
      <div className={styles.covidMap}>
        <MapContainer className={styles.leafletContainer} center={[48.38, 31.17]} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayerGroup>
            <div>{this.props.countryInfoList.map((c) => {
              return (
                <div key={c.country}>
                  <Circle
                    center={[c.countryInfo.lat, c.countryInfo.long]}
                    pathOptions={(c.cases > COVID_CASES_NUMBERS.CASES_CIRCLE_COLOR_KOEFICIENT) ? fillRedOptions : fillYellowOptions}
                    radius={c.cases / COVID_CASES_NUMBERS.CASES_CIRCLE_RADIUS_KOEFICIENT} >
                    <Popup >
                      <div>
                        <img className={styles.countryFlag} src={c.countryInfo.flag} alt="flag" />
                        {c.country}
                      </div>
                      <div>
                        Cases: {c.cases}
                      </div>
                      <div>
                        Deaths: {c.deaths}
                      </div>
                    </Popup>
                  </Circle>
                </div>
              )
            })}</div>
          </LayerGroup>
        </MapContainer>
      </div>
    )
  }
}
