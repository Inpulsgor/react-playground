import React, { Component } from 'react';
import cn from 'classnames';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

class Counter extends Component<IProps, IState> {
  static defaultProps = {
    initialCount: 0,
  };

  state = {
    count: this.props.initialCount,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className={styles.counter}>
        <span className={styles.value}>{count}</span>
        <div className={styles.controls}>
          <button
            className={cn(styles.btn, styles.inc)}
            onClick={this.handleIncrement}
            type="button"
          >
            Plus 1
          </button>
          <button
            className={cn(styles.btn, styles.dec)}
            onClick={this.handleDecrement}
            type="button"
          >
            Minus 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
