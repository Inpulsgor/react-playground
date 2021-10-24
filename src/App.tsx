import React, { FC } from 'react';
import { Layout } from './layout';
import { Modal, ColorPicker, Counter, Dropdown, Todo } from './components';
import { COLORS } from './components/ColorPicker/helpers';

const App: FC = () => {
  return (
    <Layout>
      <Modal />
      <ColorPicker colors={COLORS} />
      <Counter initialCount={0} />
      <Dropdown />
      <Todo />
    </Layout>
  );
};

export default App;
