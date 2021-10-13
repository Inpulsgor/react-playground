import React from 'react';
import { Layout } from './layout';
import { Modal, ColorPicker } from './components';
import { COLORS } from './components/ColorPicker/helpers';

const App = () => {
  return (
    <Layout>
      <Modal />
      <ColorPicker colors={COLORS} />
    </Layout>
  );
};

export default App;
