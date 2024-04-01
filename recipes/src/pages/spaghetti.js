import React from 'react';
import Recipe from './recipesData.js';
import spaghetti from "./images/spaghetti.jpeg";

export const ingredients = [
    { ingredient: "spaghetti" },
    { ingredient: "olive oil" },
    { ingredient: "garlic" },
    { ingredient: "red pepper flakes" },
    { ingredient: "fresh parsley" },
    { ingredient: "shrimp" },
    { ingredient: "lemon" },
    { ingredient: "Parmesan cheese" },
    { ingredient: "salt" },
    { ingredient: "pepper" }
]
const Spaghetti = () => {

    const recipeData = {
        title: "Aglio e Olio Recipe",
        heading: "Simple Aglio e Olio Recipe",
        image: spaghetti,
        ingredients: [
            "1/2 pound spaghetti",
            "1/4 cup olive oil",
            "4 cloves garlic, minced",
            "1/4 teaspoon red pepper flakes",
            "1/4 cup fresh parsley, chopped",
            "1/2 pound shrimp, peeled and deveined",
            "Juice of 1 lemon",
            "1/4 cup grated Parmesan cheese",
            "Salt and pepper to taste"],
        instructions: [
            "1. Cook spaghetti according to package instructions, then drain and set aside.",
            "2. In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant.",
            "3. Add red pepper flakes for a spicy kick and stir in peeled shrimp until they turn pink.",
            "4. Toss the cooked spaghetti into the pan, coating it in the flavorful oil.",
            "5. Squeeze fresh lemon juice over the dish and sprinkle with chopped parsley.",
            "6. Season with salt and pepper.",
            "7. Serve your delicious Spaghetti Aglio e Olio with Shrimp!",
            "8. Enjoy your home cooked Aglio e Olio!"],
        buttonLink: "/spaghettiCooking",
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

export default Spaghetti;