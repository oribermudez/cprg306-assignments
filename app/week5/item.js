import Checkbox from "../week3/checkbox";

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const Item = ({name, quantity, category}) => {
  return (
    <li className="w-96 h-16 border-solid border border-cyan-500 drop-shadow-lg rounded-md flex items-center mt-3">
      <div className='w-16 h-full bg-cyan-400 text-white flex justify-center items-center'>
        <Checkbox />
      </div>
      <div className="w-full h-full rounded-r-md flex flex-col justify-center pl-6 bg-white">
        <div className="text-gray-900 font-bold">
          {capitalize(name)}
        </div>
        <div className="text-gray-300 text-xs">
          Buy {quantity} in {category}
        </div>
      </div>
    </li>
  );
}

export default Item;