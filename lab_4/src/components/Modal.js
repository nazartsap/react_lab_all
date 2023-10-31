import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../App.css';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
          <button className="modal-close" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
