import React from 'react';
import { Layout } from './layout';
import { Logo, Modal, ColorPicker } from './components';
import { COLORS } from './components/ColorPicker/helpers';
import CoffeeLogo from './assets/icons/coffee.svg';

const App = () => {
  return (
    <Layout>
      <Logo logo={CoffeeLogo} />
      <Modal />
      <ColorPicker colors={COLORS} />
    </Layout>
  );
};

export default App;
