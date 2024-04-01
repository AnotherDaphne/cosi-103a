import React from 'react';
import Recipe from './recipesData.js';
import kungpaochicken from "./images/kungpaochicken.jpeg";

const Kungpaochicken = () => {
    const ingredients = [
        { ingredient: "chicken thighs" },
        { ingredient: "soy sauce" },
        { ingredient: "rice vinegar" },
        { ingredient: "hoisin sauce" },
        { ingredient: "cornstarch" },
        { ingredient: "vegetable oil" },
        { ingredient: "garlic" },
        { ingredient: "ginger" },
        { ingredient: "unsalted peanuts" },
        { ingredient: "green onions" },
        { ingredient: "red bell pepper" },
        { ingredient: "green bell pepper" },
        { ingredient: "water" },
        { ingredient: "chili garlic sauce" },
        { ingredient: "cooked rice" }
    ]
    const recipeData = {
        title: "Kung Pao Chicken Recipe",
        heading: "Sichuan Kung Pao Chicken 宫保鸡 Recipe",
        image: kungpaochicken,
        ingredients: [
            "1 lb (450g) boneless, skinless chicken thighs, cut into small pieces",
            "2 tablespoons soy sauce",
            "1 tablespoon rice vinegar",
            "1 tablespoon hoisin sauce",
            "1 tablespoon cornstarch",
            "1 tablespoon vegetable oil",
            "3 cloves garlic, minced",
            "1 teaspoon ginger, minced",
            "1/2 cup unsalted peanuts",
            "2 green onions, sliced",
            "1/2 cup diced red bell pepper",
            "1/2 cup diced green bell pepper",
            "1/4 cup water",
            "2 tablespoons chili garlic sauce (adjust to taste)",
            "Cooked rice for serving"],


        instructions: [
            "1. In a bowl, combine soy sauce, rice vinegar, hoisin sauce, and cornstarch. Add the chicken pieces and marinate for about 15-20 minutes.",
            "2. Heat vegetable oil in a wok or large skillet over medium-high heat. Add minced garlic and ginger, sauté for about 30 seconds until fragrant.",
            "3. Add marinated chicken to the wok and stir-fry until browned and cooked through.",
            "4. Add diced red and green bell peppers, peanuts, and sliced green onions.",
            "5. Pour in water and chili garlic sauce. Stir-fry for another 1-2 minutes until the sauce thickens.",
            "6. Serve the Kung Pao chicken with cooked rice.",
            "7. Serve the Kung Pao Chicken over cooked rice and garnish with additional green onions and peanuts if desired.",
            "8. Dig in to your home cooked Sichuan Kung Pao Chicken!"],
        buttonLink: "/kungpaoCooking",
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

export default Kungpaochicken;