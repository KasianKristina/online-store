import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css'

const modalRootElement = document.getElementById('modal-container');

export const Modal = (props) => {
  const {marker, open, onClose} = props;
  const element = useMemo(() => {
    const element = document.createElement("div");
    element.dataset.marker = marker;
    return element;
  }, [marker]);

  useEffect(() => {
    if (open) {
    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  }
  });

  if (open) {
    return createPortal(
      <div className={styles.modal_background}>
        <div className={styles.modal_cart}>
          <div className={styles.modal_close} onClick={onClose}></div>
          {props.children}
        </div>
      </div>,
      element
    );
  }

  return null;
}