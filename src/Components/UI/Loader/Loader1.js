import React from 'react';
import styles from './Loader1.module.css';

function Loader1() {
  return (
    <div className={styles['loader-container']}>
      <div className={styles.loader}>
        <h3>Loader</h3>
        <div className={styles['loader--dot']}></div>
        <div className={styles['loader--dot']}></div>
        <div className={styles['loader--dot']}></div>
        <div className={styles['loader--dot']}></div>
        <div className={styles['loader--dot']}></div>
        <div className={styles['loader--dot']}></div>
        <div className={styles['loader--text']}></div>
      </div>
    </div>
  );
}

export default Loader1;
