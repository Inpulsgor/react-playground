import { FC, useState } from 'react';
import {
  Modal,
  ColorPicker,
  Counter,
  Dropdown,
  Todo,
  Form,
  Button,
  Tabs,
} from 'src/components';
import { COLORS } from 'src/components/ColorPicker/helpers';

const Playground: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmitForm = data => {
    console.log(data);
  };

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <Button style="toggle" onClick={toggleModal}>
        Show modal
      </Button>
      {showModal && (
        <Modal showModal={showModal} toggleModal={toggleModal}>
          <Button style="close" onClick={toggleModal} />
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
      <Form formSubmit={handleSubmitForm} />
      <Todo />
      <Tabs />
    </div>
  );
};

export default Playground;
