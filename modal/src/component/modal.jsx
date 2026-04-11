import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return (
    <div>
      <div className="header">
        {createPortal(
          <div className="modal-container">
            <span>This is Modal</span>
            {children}
          </div>,
          document.getElementById("modal"),
        )}
      </div>
    </div>
  );
};

export default Modal;
