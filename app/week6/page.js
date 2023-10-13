"use client"

import Link from 'next/link';
import ItemList from './item-list';
import AddItem from './add-item';
import itemsData from './items.json';

import { useState } from 'react';

const Page = () => {
const [items, setItems] = useState(itemsData);

const handleAddItem = (item) => {
  setItems([...items, item]);
};

  return (
    <main className="bg-slate-50 w-screen h-screen overflow-scroll p-5">
      <h1 className='text-cyan-500 text-3xl font-bold m-2'>Shopping List</h1>
     <ItemList items={items} />
     <AddItem onAddItem={handleAddItem} />
      <Link
        href="/assignments"
        className="w-full lg:w-48 mt-7 inline-block rounded-lg border border-transparent bg-gray-400 py-3 px-5 text-center font-medium text-white hover:bg-gray-500"
      >
        Back
      </Link>
    </main>
  );
}

export default Page;