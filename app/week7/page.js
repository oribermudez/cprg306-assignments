"use client"

import Link from 'next/link';
import ItemList from './item-list';
import { useState } from 'react';
import Image from 'next/image';

import AddItem from './add-item';
import itemsData from './items.json';

const Page = () => {
const [items, setItems] = useState(itemsData);

const handleAddItem = (item) => {
  setItems([...items, item]);
};

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
        <ItemList items={items} onAddItem={handleAddItem}/>
        <div className='flex justify-center items-center mt-5 md:hidden lg:hidden'>
          <AddItem text="Add Item" onAddItem={handleAddItem} />
        </div>
      </main>
    </>
  );
}

export default Page;