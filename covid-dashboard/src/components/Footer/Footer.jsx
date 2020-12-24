import React, { Component } from 'react';
import styles from './Footer.module.scss';
import logo from '../../logo.svg';


export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.createBy}>
            <p>Create by:</p> 
            <ul>
              <li key ="1"><a href='https://github.com/AnAtoliyAK'>AnAtoliyAK</a></li>
              <li key ="2"><a href='https://github.com/khovricheva'>khovricheva</a></li>
              <li key ="3"><a href='https://github.com/MaryMihn'>MaryMihn</a></li>
            </ul> 
        </div>
        <div>2020</div>
        <div>
          <a href="https://rs.school/js/">
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
        </div>
        
      </div>
    )
  }
}