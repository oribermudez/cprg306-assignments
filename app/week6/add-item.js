"use client"

import { useState } from 'react';
import Modal from './modal';
import NewItem from './new-item';

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
        className="w-full lg:w-48 bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-3 px-5 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Add Item
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewItem onClose={closeModal} onAddItem={onAddItem} />
        </Modal>
      )}
    </div>
  );
}

export default AddItem;
