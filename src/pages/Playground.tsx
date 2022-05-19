import { FC, useState } from "react";
import {
  Modal,
  ColorPicker,
  Counter,
  Dropdown,
  Todo,
  Button,
  Tabs,
} from "common/components";
import { COLORS } from "common/static/constants";

const Playground: FC = () => {
  const [showModal, setShowModal] = useState(false);

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
      <Todo />
      <Tabs />
    </div>
  );
};

export default Playground;
