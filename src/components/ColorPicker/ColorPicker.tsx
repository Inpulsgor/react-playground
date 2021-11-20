import React, { Component } from 'react';
import cn from 'classnames';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

class ColorPicker extends Component<IProps, IState> {
  state = {
    activeColor: 0,
  };

  setActiveColor = (index: number): void =>
    this.setState({ activeColor: index });

  render() {
    const { activeColor } = this.state;
    const { colors } = this.props;
    const { label } = colors[activeColor];

    return (
      <>
        <div className={styles.colorList}>
          <span className={styles.label}>Selected color: {label}</span>
          {colors &&
            colors.map(({ label, color }, index) => (
              <button
                key={label}
                style={{ backgroundColor: color }}
                className={cn(styles.colorItem, {
                  [styles.colorActive]: index === activeColor,
                })}
                onClick={() => this.setActiveColor(index)}
              ></button>
            ))}
        </div>
      </>
    );
  }
}

export default ColorPicker;
