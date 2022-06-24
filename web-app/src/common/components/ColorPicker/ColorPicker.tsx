import { Component } from "react";
import { IProps, IState } from "./interface";

class ColorPicker extends Component<IProps, IState> {
  state = {
    activeColor: 0,
  };

  setActiveColor = (index: number): void =>
    this.setState({ activeColor: index });

  render(): JSX.Element {
    const { activeColor } = this.state;
    const { colors } = this.props;
    const { label } = colors[activeColor];

    return (
      <>
        <div>
          <span>Selected color: {label}</span>
          {colors &&
            colors.map(({ label, color }, index) => (
              <button
                key={label}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveColor(index)}
              ></button>
            ))}
        </div>
      </>
    );
  }
}

export default ColorPicker;
