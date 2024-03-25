import React from 'react';

function AddRecipe({ recipe }) { // Access the 'recipe' prop
  // Parse the JSON text
  let recipeObject;
  try {
    recipeObject = JSON.parse(recipe);
  } catch (error) {
    console.error('Invalid JSON:', error);
    return <div>Invalid JSON</div>;
  }

  // Use the JSON object
  // ...

  return (
    <div>
      <h1>{recipeObject.title}</h1>
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

export default AddRecipe;