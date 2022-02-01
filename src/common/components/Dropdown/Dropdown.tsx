import { Component } from 'react';
import { IProps, IState } from './interface';

class Dropdown extends Component<IProps, IState> {
  state = {
    visible: false,
  };

  handleToggle = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleToggle}>
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && (
          <ul>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
