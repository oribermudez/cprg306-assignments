"use client"

import NewItem from "./new-item";

const Modal = ({ onClose, onAddItem }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose} />
      <NewItem onClose={onClose} onAddItem={onAddItem} />
    </div>
  );
}

export default Modal;
