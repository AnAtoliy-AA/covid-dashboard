import * as axios from 'axios';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';

import styles from './CovidMap.module.css';

export default class CovidMap extends Component {

  render() {
    return (
      <div className={styles.covidMap}>
        <MapContainer className={styles.leafletContainer} center={[48.38, 31.17]} zoom={3} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div>{this.props.countryInfoList.map((c) => {
            return (
              <Marker position={[c.countryInfo.lat, c.countryInfo.long]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
              </Marker>
            )
          })}</div>

        </MapContainer>
      </div>
    )
  }
}