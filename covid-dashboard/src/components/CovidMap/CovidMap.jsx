import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';

import styles from './CovidMap.module.css';

export default class CovidMap extends Component {

  render() {
    return (
      <div className={styles.covidMap}>
        <MapContainer className={styles.leafletContainer} center={[48.38, 31.17]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div>{this.props.countryInfoList.map((c) => {
            return (
              <Marker position={[c.countryInfo.lat, c.countryInfo.long]}>
                <Popup>
                <img className={styles.countryFlag} src={c.countryInfo.flag} alt=""/>
                  {c.country} <br /> {c.cases}     
    </Popup>
              </Marker>
            )
          })}</div>

        </MapContainer>
      </div>
    )
  }
}