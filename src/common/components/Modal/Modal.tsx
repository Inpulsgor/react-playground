import { FC, MouseEvent, KeyboardEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './interface';

const rootModal = document.querySelector('#root-modal') as HTMLDivElement;

const Modal: FC<ModalProps> = ({ toggleModal, children }) => {
  // const handleKeyDown = (event): void => {
  //   if (event.code === 'Escape') toggleModal();
  // };

  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [handleKeyDown]);

  // const handleBackDropClick = (event: MouseEvent<HTMLDivElement>): void => {
  //   if (event.target === event.currentTarget) toggleModal();
  // };

  // const handleKeyPress = () => {
  //   console.log('key press');
  // };

  return createPortal(
    <div>
      <div>{children}</div>
    </div>,
    rootModal,
  );
};

export default Modal;
