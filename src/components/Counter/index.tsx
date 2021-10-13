import React, { Component } from 'react';
import styles from './styles.module.scss';

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className={styles.counter}>
        <span className={styles.value}></span>
        <div className={styles.controls}>
          <button className={styles.btn} type="button">
            Plus 1
          </button>
          <button className={styles.btn} type="button">
            Minus 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
