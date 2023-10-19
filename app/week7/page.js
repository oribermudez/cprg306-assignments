"use client"

import Link from 'next/link';
import ItemList from './item-list';
import { useState } from 'react';
import Image from 'next/image';

import AddItem from './add-item';
import itemsData from './items.json';
import MealsList from './meals';
import Modal from './modal';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [ingredient, setIngredient] = useState(itemsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleSelectedItem = (name) => {
    const [sanitizedName] = name.split(',');
    openModal();
    setIngredient(sanitizedName);
  }

  return (
    <>
      <header className='bg-white w-full flex items-center border-b border-gray-200 p-4'>
        <Link
          href="/assignments"
          className="text-xs text-black hover:text-gray-400 transition duration-300"
        >
          <Image src="/assets/back.png" width={24} height={24} alt="Back" />
        </Link>
        <h1 className='text-cyan-400 text-2xl font-bold m-2 mx-auto'>My Shopping List</h1>
      </header>
      <main className="bg-slate-50 w-screen h-screen overflow-scroll p-5">
        <ItemList items={items} onAddItem={handleAddItem} onItemSelect={handleSelectedItem}/>
        <div className='flex justify-center items-center mt-5 md:hidden lg:hidden'>
          <AddItem text="Add Item" onAddItem={handleAddItem} />
        </div>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <MealsList ingredient={ingredient} />
          </Modal>
        )}
      </main>
    </>
  );
}

export default Page;