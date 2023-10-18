"use client"

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose} />
      {children}
    </div>
  );
}

export default Modal;
