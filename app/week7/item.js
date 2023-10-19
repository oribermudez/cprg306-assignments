import categories from "./categories";
import { capitalize } from "./helpers";

const Item = ({ name, quantity, category, icon, onSelect }) => {
  return (
    <li
      className={`bg-white shadow-md rounded-md p-4 mt-3 transition-transform transform hover:-translate-y-1 hover:scale-105 border-l-4 ${categories[category].border}`}
      onClick={() => onSelect(name)}
    >
      <div className="flex items-center">
        <div className="w-14 h-14 bg-gray-100/50 text-white flex justify-center items-center rounded-full">
          {icon}
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold text-gray-900">
            {capitalize(name)}
          </div>
          <div className="text-gray-500 text-sm">
            Buy {quantity} in <span className={`${categories[category].text}`}>{category}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
