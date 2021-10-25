import React, { Component } from 'react';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

class Modal extends Component<IProps, IState> {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
