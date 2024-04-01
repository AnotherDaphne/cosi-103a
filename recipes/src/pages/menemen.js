import React from 'react';
import Recipe from './recipesData.js';
import menemen from "./images/Menemen.jpeg";

export const ingredients =[
  {ingredient: "olive oil"},
  {ingredient: "onion"},
  {ingredient: "green peppers"},
  {ingredient: "tomatoes"},
  {ingredient: "eggs"},
  {ingredient: "salt"},
  {ingredient: "pepper"},
  {ingredient: "red pepper flakes"},
  {ingredient: "fresh parsley"}
  
]

const Menemen = () => {

  const recipeData = {
    title: "Menemen Recipe",
    heading: "Menemen Recipe",
    image: menemen,
    ingredients: [
        "2 tablespoons olive oil", 
        "1 onion, finely chopped",
        "2 green peppers, chopped",
        "2 tomatoes, chopped", 
        "4 eggs",
        "Salt and pepper to taste",
        "Red pepper flakes (optional)",
        "Fresh parsley, chopped (for garnish)" ],
    instructions: [
        "1. Sauté Vegetables:",
        "2. Heat olive oil in a large skillet over medium heat.",
        "3. Add finely chopped onions and cook until they become translucent.",
        "4. Add chopped green peppers to the skillet and sauté until they soften.",
        "5. Stir in chopped tomatoes and cook until they release their juices and start to break down.",
        "6. Season the mixture with salt and pepper to taste. Add red pepper flakes if you like prefer it spicy.",
        "7. Make four wells in the vegetable mixture using a spoon.",
        "8. Crack an egg into each well. Allow the eggs to cook until the whites are set but the yolks are still runny.",
        "9. Cover the skillet and cook for a few more minutes until the egg whites are fully cooked, or cook longer if you prefer firmer yolks.",
        "10. Sprinkle chopped fresh parsley over the top and serve immediately.",
        "11. Enjoy your freshly made Turkish Menemen!"],
    buttonLink: "/menemenCooking",
    nutritionInfo: [
      "placeholder"
  ]
  };

  return (
    <div>
      <Recipe {...recipeData} />
    </div>
  );
};

export default Menemen;