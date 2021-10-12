import React from 'react';
import { Logo, Modal, ColorPicker } from './components';
import { COLORS } from './components/ColorPicker/helpers';
import CoffeeLogo from './assets/icons/coffee.svg';

const App = () => {
  return (
    <>
      <Logo logo={CoffeeLogo} />
      <Modal />
      <ColorPicker colors={COLORS} />
    </>
  );
};

export default App;
