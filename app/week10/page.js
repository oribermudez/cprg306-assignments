"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";
import { getItems, addItem } from './_services/shopping-list-service';

import Image from 'next/image';
import ItemList from './shopping-list/item-list';
import AddItem from './shopping-list/add-item';
import MealsList from './shopping-list/meals';
import Modal from './shopping-list/modal';

const Page = () => {
  const [items, setItems] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isLoading } = useUserAuth();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items);
  }

  const handleAddItem = async (item) => {
        // Call the addItem function to add the item to the shopping list
    const newItemId = await addItem(user.uid, item);

    // Set the ID of the new item
    item.id = newItemId;

    console.log(`Item added successfully with ID: ${newItemId}`);
    loadItems();
  };

  const handleSelectedItem = (name) => {
    const [sanitizedName] = name.split(',');
    openModal();
    setIngredient(sanitizedName);
  }

 useEffect(() => {
  if (user && !isLoading) {
    loadItems();
  }
}, [user, isLoading]);

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