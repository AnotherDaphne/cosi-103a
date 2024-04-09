import React from 'react';
import defaultImage from "./cheesecake.jpg";


function Recipe({ recipe }) {
  let recipeObject;
  try {
    recipeObject = JSON.parse(recipe);
  } catch (error) {
    console.error('Invalid JSON:', error);
    return <div>Invalid JSON</div>;
  }

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



