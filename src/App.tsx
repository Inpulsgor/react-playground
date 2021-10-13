import React from 'react';
import { Layout } from './layout';
import { Modal, ColorPicker, Counter } from './components';
import { COLORS } from './components/ColorPicker/helpers';

const App = () => {
  return (
    <Layout>
      <Modal />
      <ColorPicker colors={COLORS} />
      <Counter initialCount={0} />
    </Layout>
  );
};

export default App;
