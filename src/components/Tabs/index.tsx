import React, { PureComponent } from 'react';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';
import tabs from './tabs.json';

class Tabs extends PureComponent<IProps, IState> {
  state = {
    activeTabIndex: 0,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  // 	return nextState.activeTabIndex !== this.state.activeTabIndex;
  // };

  setActiveIndex = index => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    const { activeTabIndex } = this.state;
    const activeTab = tabs[activeTabIndex];

    return (
      <div className={styles.tabs}>
        <div className={styles.controls}>
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.label}
              onClick={() => this.setActiveIndex(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          <h2 className={styles.label}>{activeTab.label}</h2>
          <p className={styles.text}>{activeTab.content}</p>
        </div>
      </div>
    );
  }
}

export default Tabs;
