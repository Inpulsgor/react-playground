import React, { Component } from 'react';
import { Layout } from './layout';
import {
  Modal,
  ColorPicker,
  Counter,
  Dropdown,
  Todo,
  Form,
  Button,
  Tabs,
} from './components';
import { COLORS } from './components/ColorPicker/helpers';
import { IProps, IState } from './types/interface';
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
        {showModal && (
          <Modal showModal={showModal} toggleModal={this.toggleModal}>
            <Button type="close" onClick={this.toggleModal} />
            <span>Modal</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              repellat. Earum quidem iusto voluptas soluta maxime consequuntur,
              officiis doloremque nostrum unde obcaecati sed nobis sint ab ea
              ullam porro placeat.
            </p>
          </Modal>
        )}
        <ColorPicker colors={COLORS} />
        <Counter initialCount={0} />
        <Dropdown />
        <Form formSubmit={this.handleSubmitForm} />
        <Todo />
        <Tabs />
      </Layout>
    );
  }
}

export default App;
