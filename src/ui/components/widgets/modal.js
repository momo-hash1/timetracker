import Button from "./Button";
import React from "react";

const Modal = (props) => {
  if (!props.showModal) return;
  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <div className="modal-header">
            {props.header}
            <Button onClick={() => props.hideModal()}>x</Button>
          </div>
          <div className="">{props.children}</div>
        </div>
      </div>
      <div className="modal-background"></div>
    </div>
  );
};

export default Modal;
