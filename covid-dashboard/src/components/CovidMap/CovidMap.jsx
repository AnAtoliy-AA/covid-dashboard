import { Circle, LayerGroup, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';

import styles from './CovidMap.module.css';

export default class CovidMap extends Component {



  render() {
    const fillBlueOptions = { fillColor: 'blue' }
    const fillRedOptions = { fillColor: 'red' }
    const fillYellowOptions = { fillColor: 'yellow' }
    const greenOptions = { color: 'green', fillColor: 'green' }
    // const purpleOptions = { color: 'purple' }
    return (
      <div className={styles.covidMap}>
        <MapContainer className={styles.leafletContainer} center={[48.38, 31.17]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayerGroup>
            <div>{this.props.countryInfoList.map((c) => {
              return (
                <div key={c.countryInfo.iso2}>
                  <Circle
                    center={[c.countryInfo.lat, c.countryInfo.long]}
                    pathOptions={(c.cases > 1000000) ? fillRedOptions : fillYellowOptions}
                    radius={c.cases / 10}
                    onClick={() => {
                      console.log('c.country')
                    }} >
                    <Popup >
                      <div>
                        <img className={styles.countryFlag} src={c.countryInfo.flag} alt="" />
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