import React from 'react';
import defaultImage from "./cheesecake.jpg";
import { useLocation } from 'react-router-dom';



function Recipe() {
  
  const location = useLocation(); // Use useLocation hook to access location
  const { state } = location; // Destructure state from location

  if (!state || !state.recipeInput) {
    return <div>No recipe found</div>; // Handle case where state or recipeInput is undefined
  }

  const { recipeInput } = state;
  let recipeObject;
  try {
    recipeObject = JSON.parse(recipeInput);
  } catch (error) {
    console.error('Invalid JSON:', error);
    return <div>Invalid JSON</div>;
  }
  console.log('Recipe found:', recipeObject);
  return (
    <div>
      <h1>{recipeObject.title}</h1>
      <img src={recipeObject.image || defaultImage} alt={recipeObject.title} /> {/* Use the default image if recipeObject.image is not defined */}
      <h2>Ingredients</h2>
      <ul>
        {recipeObject.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipeObject.instructions}</p>
    </div>
  );
}

export default Recipe;



