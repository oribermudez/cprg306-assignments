"use client"

import React, { useState } from 'react';

function NewItem({ onClose }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    console.log(item);
    alert(`Added item: \n--> Name: ${name} \n--> Quantity: ${quantity} \n--> Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96 z-50">
      <div className="mb-4 relative">
        <label
          htmlFor="name"
          className={`absolute left-2 ${
            name ? 'text-gray-600 text-xs' : 'text-gray-400 text-lg'
          } transition-all pointer-events-none`}
        >
          Item Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`w-full px-2 py-1 border-b-2 text-gray-600 text-sm border-gray-300 focus:border-cyan-500 bg-white focus:outline-none ${name && 'pt-4'}`}
        />
      </div>

      <div className="mb-4 relative">
        <label
          htmlFor="quantity"
          className={`absolute left-2 text-gray-600 text-xs transition-all pointer-events-none`}
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="99"
          required
          className="w-full px-2 py-1 border-b-2 text-gray-600 text-sm border-gray-300 focus:border-cyan-500 bg-white focus:outline-none pt-4"
        />
      </div>

      <div className="mb-4 relative">
        <label
          htmlFor="category"
          className={`absolute left-2 text-gray-600 text-xs transition-all pointer-events-none`}
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-2 py-1 border-b-2 text-gray-600 text-sm border-gray-300 focus:border-cyan-500 bg-white focus:outline-none pt-4"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="submit"
          className="w-full bg-cyan-400 text-white py-2 rounded-lg hover:bg-cyan-600"
        >
          Add Item
        </button>

        <button
          className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>
      
    </form>
  );
}

export default NewItem;
