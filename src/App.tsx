import React, { FC } from 'react';
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

const App: FC = () => {
  const handleSubmitForm = data => console.log(data);

  return (
    <Layout>
      <Modal />
      <ColorPicker colors={COLORS} />
      <Counter initialCount={0} />
      <Dropdown />
      <Form formSubmit={handleSubmitForm} />
      <Todo />
    </Layout>
  );
};

export default App;
