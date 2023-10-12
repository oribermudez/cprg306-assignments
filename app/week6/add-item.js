"use client"

import { useState } from 'react';
import Modal from './modal';

const AddItem = ({ onAddItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Item
      </button>
      {isModalOpen && <Modal onClose={closeModal} onAddItem={onAddItem} />}
    </div>
  );
}

export default AddItem;
