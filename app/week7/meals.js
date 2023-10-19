import { useState, useEffect } from 'react';
import Image from 'next/image';

const MealsList = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [openMealId, setOpenMealId] = useState(null);

  const getRecipe = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    const { strInstructions } = data.meals[0];
    const sanitizedRecipe = await strInstructions.trim().split(/\./);
    setRecipe(sanitizedRecipe);
  }

  const toggleAccordion = async (mealId) => {
    setOpenMealId(openMealId === mealId ? null : mealId);
    getRecipe(mealId);
  };

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals);
    }
    getMeals();
  }, [ingredient]);

  return (
    <div className='h-3/4 w-3/4 bg-white rounded-lg z-50 p-4 overflow-scroll scrollbar-thin scrollbar-thumb-cyan-500'>
      <ul className="grid grid-cols-1">
        <h2 className="text-xl font-semibold mb-4 text-cyan-400 text-center">Meal Ideas</h2>
        {meals && meals.length ? meals.map((meal, index) => (
            <li
              key={meal.idMeal}
              className={`text-black bg-white border-b border-grey-300 p-4 cursor-pointer transition transform hover:scale-10`}
              onClick={() => toggleAccordion(meal.idMeal)}
            >
              <span className={`${openMealId === meal.idMeal ? 'text-md text-cyan-400' : 'text-sm'} font-semibold`}>{index + 1}. {meal.strMeal}</span>
              {openMealId === meal.idMeal && (
                <div className="mt-4 flex flex-col gap-4">
                  <Image src={meal.strMealThumb} width={300} height={300} alt={meal.strMeal} className='shadow-md rounded-md'/>
                  <h3 className="text-md font-semibold text-black">Instructions</h3>
                  <ul className='flex flex-col pl-3'>
                    {recipe.map((step, index) => (
                      <li key={index} className={`mt-4 text-sm text-gray-500 list-disc list-inside ${!step && 'hidden'}`}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )) : <div className="text-center text-black">No meal ideas found for {ingredient}.</div>}
      </ul>
    </div>
  );
};

export default MealsList;
