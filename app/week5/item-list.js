"use client"
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600 text-lg">Sort by:</p>
        <div className="flex space-x-4">
          <button
            onClick={() => setSortBy('name')}
            className={`px-4 py-2 rounded-md ${sortBy === 'name' ? 'bg-cyan-500 text-white' : 'bg-cyan-200 text-gray-800 hover:bg-cyan-300 hover:text-white'} focus:outline-none transition duration-300`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy('category')}
            className={`px-4 py-2 rounded-md ${sortBy === 'category' ? 'bg-cyan-500 text-white' : 'bg-cyan-200 text-gray-800 hover:bg-cyan-300 hover:text-white'} focus:outline-none transition duration-300`}
          >
            Category
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items
          .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
          .map((item, index) => {
            return (
              <Item
                key={`${index}-${item.quantity}`}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                icon={item.icon}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ItemList;