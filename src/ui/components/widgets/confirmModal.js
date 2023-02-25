import React from "react";
import Modal from "./modal";

const ConfirmModal = () => {
  const showConfirm = useSelector((state) => state.modal.showModal);
  return <React.Fragment>{showConfirm && <Modal></Modal>}</React.Fragment>;
};

export default ConfirmModal;
