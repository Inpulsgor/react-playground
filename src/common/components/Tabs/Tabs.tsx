import { PureComponent } from 'react';
import tabs from 'common/utils/tabs.json';

export interface IProps {
  label?: string;
  content?: string;
}

export interface IState {
  activeTabIndex: number;
}

class Tabs extends PureComponent<IProps, IState> {
  state = {
    activeTabIndex: 0,
  };

  //! TODO: same as PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  // 	return nextState.activeTabIndex !== this.state.activeTabIndex;
  // };

  setActiveIndex = (index: number): void => {
    this.setState({ activeTabIndex: index });
  };

  render(): JSX.Element {
    const { activeTabIndex } = this.state;
    const activeTab = tabs[activeTabIndex];

    return (
      <div>
        <div>
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
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </div>
    );
  }
}

export default Tabs;
