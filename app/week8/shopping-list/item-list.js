"use client"

import { useState } from "react";

import Item from "./item";
import AddItem from "./add-item";

const ItemList = ({ items, onAddItem, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between">
        <div className="w-full lg:w-80 md:w-80 flex items-center justify-between mb-6">
          <p className="text-gray-600 text-lg">Sort by:</p>
          <div className="flex space-x-4">
            <button
              onClick={() => setSortBy('name')}
              className={`px-4 py-2 rounded-md ${sortBy === 'name' ? 'bg-cyan-400 text-white' : 'bg-cyan-200 text-gray-800 hover:bg-cyan-300 hover:text-white'} focus:outline-none transition duration-300`}
            >
              Name
            </button>
            <button
              onClick={() => setSortBy('category')}
              className={`px-4 py-2 rounded-md ${sortBy === 'category' ? 'bg-cyan-400 text-white' : 'bg-cyan-200 text-gray-800 hover:bg-cyan-300 hover:text-white'} focus:outline-none transition duration-300`}
            >
              Category
            </button>
          </div>
        </div>
        <div className='md:w-32 lg:w-32 hidden md:flex lg:h-[40px] md:h-[40px] items-center'>
          <AddItem text="Add Item" onAddItem={onAddItem} />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {items
          .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
          .map((item) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                icon={item.icon}
                onSelect={onItemSelect}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ItemList;