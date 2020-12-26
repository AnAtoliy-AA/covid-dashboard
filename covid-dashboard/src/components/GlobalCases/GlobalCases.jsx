import { FullScreen, useFullScreenHandle } from "react-full-screen";

import React from 'react';
import styles from './GlobalCases.module.scss';

export default function GlobalCases(props) {
  const handle = useFullScreenHandle();

  return (
    <div className={styles.globalCases}>
      <button className={styles.fullScreen} onClick={handle.enter}>
        <img src="https://image.flaticon.com/icons/png/512/67/67760.png" alt="" />
      </button>

      <FullScreen handle={handle}>
        Global Cases
        <div className={styles.cases}>
          {props.worldWideData.TotalConfirmed}
        </div>
      </FullScreen>
    </div>
  );
}
