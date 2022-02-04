import { Component, ReactNode } from 'react';
export interface IProps {
  children?: ReactNode;
}
export interface IState {
  visible: boolean;
}

class Dropdown extends Component<IProps, IState> {
  state = {
    visible: false,
  };

  handleToggle = (): void =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render(): JSX.Element {
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
