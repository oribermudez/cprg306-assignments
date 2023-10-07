"use client"

import { useState } from "react";

import Item from "./item";
import items from "./items.json"

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  return (
    <>
     <div className="text-gray-600 flex justify-center items-center w-80 lg:w-96">
      <p className="mr-6 pt-4">Sort by</p>
      <div className="flex justify-center items-center gap-4 lg:gap-6">
        <button
          onClick={() => setSortBy('name')}
          className={`mt-7 inline-block rounded-md border border-transparent ${sortBy === 'name' ? 'bg-cyan-600 underline underline-offset-4' : 'bg-cyan-400'} px-8 py-3 text-center font-medium text-white hover:bg-cyan-500`}
        >
          Name
        </button>
        <button
        onClick={() => setSortBy('category')}
          className={`mt-7 inline-block rounded-md border border-transparent ${sortBy === 'category' ? 'bg-cyan-600 underline underline-offset-4' : 'bg-cyan-400'} px-8 py-3 text-center font-medium text-white hover:bg-cyan-500`}
        >
          Category
        </button>
      </div>
    </div>
    <ul className="flex flex-col mt-6 w-80 lg:w-96">
      {items.sort((a,b) => a[sortBy].localeCompare(b[sortBy])).map((item, index) => {
        return <Item key={`${index}-${item.quantity}`} name={item.name} quantity={item.quantity} category={item.category} icon={item.icon}/>
      })}
    </ul>
    </>
    
  );
}

export default ItemList;