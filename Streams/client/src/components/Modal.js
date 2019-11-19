import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ header, content, onDismiss, actions }) => {
  return createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={event => event.stopPropagation()}
      >
        <div className="header">{header}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
