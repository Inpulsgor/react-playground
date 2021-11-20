import React, { Component } from 'react';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

class Dropdown extends Component<IProps, IState> {
  state = {
    visible: false,
  };

  handleToggle = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;

    return (
      <div className={styles.dropdown}>
        <button
          className={styles.toggle}
          type="button"
          onClick={this.handleToggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && (
          <ul className={styles.menu}>
            <li className={styles.menuItem}>Menu item</li>
            <li className={styles.menuItem}>Menu item</li>
            <li className={styles.menuItem}>Menu item</li>
            <li className={styles.menuItem}>Menu item</li>
            <li className={styles.menuItem}>Menu item</li>
            <li className={styles.menuItem}>Menu item</li>
            <li className={styles.menuItem}>Menu item</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
