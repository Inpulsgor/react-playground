import React, { Component } from 'react';
import styles from './styles.module.scss';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.toggle} type="button"></button>

        <div className={styles.menu}></div>
      </div>
    );
  }
}

export default Dropdown;
