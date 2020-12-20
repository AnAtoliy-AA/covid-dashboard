import * as axios from 'axios';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';

import styles from './CovidMap.module.css';

export default class CovidMap extends Component {

  componentDidMount() {
    axios.get(`https://api.covid19api.com/dayone/country/ukraine/status/confirmed`).then((response) => {
      const activeCountryLongitude = response.data[0].Lon;
      const activeCountryLatitude = response.data[0].Lat;
      console.log("RESPONSE: ", response.data[0].Lat);
      console.log("RESPONSE2: ", response.data[0].Lon);
    });
  }
  render() {
    return (
      <div className={styles.covidMap}>
        <MapContainer className={styles.leafletContainer} center={[48.38, 31.17]} zoom={3} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[48.38, 31.17]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  }
}