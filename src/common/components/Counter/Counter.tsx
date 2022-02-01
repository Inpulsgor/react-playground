import { Component } from 'react';
import { IProps, IState } from './interface';

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
      <div>
        <span>{count}</span>
        <div>
          <button onClick={this.handleDecrement} type="button">
            Minus 1
          </button>
          <button onClick={this.handleIncrement} type="button">
            Plus 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
