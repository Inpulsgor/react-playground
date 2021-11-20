import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { IProps } from './interface';
import styles from './styles.module.scss';

const rootModal = document.querySelector('#root-modal') as HTMLDivElement;

class Modal extends Component<IProps> {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') this.props.toggleModal();
  };

  handleBackDropClick = event => {
    if (event.target === event.currentTarget) this.props.toggleModal();
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={styles.backdrop} onClick={this.handleBackDropClick}>
        <div className={styles.modal}>{children}</div>
      </div>,
      rootModal,
    );
  }
}

export default Modal;
