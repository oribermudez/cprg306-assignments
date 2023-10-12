const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const Item = ({ name, quantity, category, icon }) => {
  return (
    <li className="bg-white shadow-md rounded-md p-4 mt-3 transition-transform transform hover:-translate-y-1 hover:scale-105">
      <div className="flex items-center">
        <div className="w-14 h-14 border-4 border-cyan-400 text-white flex justify-center items-center rounded-full">
          {icon}
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold text-gray-900">
            {capitalize(name)}
          </div>
          <div className="text-gray-500 text-sm">
            Buy {quantity} in {category}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
