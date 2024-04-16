import React from 'react';
import defaultImage from "./cheesecake.jpg";
import { useLocation } from 'react-router-dom';



function Recipe() {
  const location = useLocation(); //use useLocation hook to access location
  const params = new URLSearchParams(location.search);
  const recipeInput = params.get('recipeInput');

  if (!recipeInput) {
    return <div>No recipe found</div>; //handles case where recipeInput is undefined
  }

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



