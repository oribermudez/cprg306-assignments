"use client"

import { useState } from 'react';
import Modal from './modal';
import NewItem from './new-item';

const AddItem = ({ text, onAddItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="w-full h-full bg-cyan-400 hover:bg-cyan-600 text-white py-3 lg:py-0 md:py-0 px-5 rounded-lg focus:outline-none focus:shadow-outline"
      >
        {text}
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewItem onClose={closeModal} onAddItem={onAddItem} />
        </Modal>
      )}
    </>
  );
}

export default AddItem;
