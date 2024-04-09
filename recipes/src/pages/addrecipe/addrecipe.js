import React from 'react';
import { useParams } from "react-router-dom";
import defaultImage from "./cheesecake.jpg";


function Recipe({ recipe }) {
  let {id} = useParams();
  let recipeObject = recipe[id - 1];
  try {
    recipeObject = JSON.parse(recipe);
  } catch (error) {
    console.error('Invalid JSON:', error);
    return <div>Invalid JSON</div>;
  }

  return (
    <div>
      <h1>{recipeObject.title}</h1>
      <img img height={100} width= {100} src={recipeObject.image || defaultImage} alt={recipeObject.title} /> {/* Use the default image if recipeObject.image is not defined */}
      <h3>Ingredients</h3>
      <ul>
        {recipeObject.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipeObject.instructions}</p>
    </div>
  );
}

export default Recipe;