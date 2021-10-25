import React, { Component } from 'react';
import { Layout } from './layout';
import {
  Modal,
  ColorPicker,
  Counter,
  Dropdown,
  Todo,
  Form,
} from './components';
import { COLORS } from './components/ColorPicker/helpers';

interface IProps {}
interface IState {
  showModal: boolean;
}

class App extends Component<IProps, IState> {
  state = {
    showModal: false,
  };

  handleSubmitForm = data => console.log(data);
  toggleModal = () =>
    this.setState(prevState => ({ showModal: !prevState.showModal }));

  render() {
    const { showModal } = this.state;

    return (
      <Layout>
        <button type="button" onClick={this.toggleModal}>
          Show modal
        </button>
        {showModal && <Modal />}
        <ColorPicker colors={COLORS} />
        <Counter initialCount={0} />
        <Dropdown />
        <Form formSubmit={this.handleSubmitForm} />
        <Todo />
      </Layout>
    );
  }
}

export default App;
