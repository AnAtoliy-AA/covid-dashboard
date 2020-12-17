import React, { Component } from 'react';

import styles from './Footer.module.scss';

import logo from '../../logo.svg';


export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        
          <p>Create by</p> 
            <ul>
              <li key ="1">a</li>
              <li key ="2">b</li>
              <li key ="3">c</li>
            </ul> 
        
        <div>
          <a href="https://rs.school/js/">
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
          <div>2020</div>
        </div>
        
      </div>
    )
  }
}