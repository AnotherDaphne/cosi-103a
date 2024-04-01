import React from 'react';
import Recipe from './recipesData.js';
import chickensalad from "./images/chickensalad.jpg";

export const ingredients= [
    {ingredient: "chicken breast"},
    {ingredient: "salt"},
    {ingredient: "pepper"},
    {ingredient: "olive oil"},
    {ingredient: "mixed salad greens(lettuce,spinach)"},
    {ingredient: "cherry tomatoes"},
    {ingredient: "cucumber"},
    {ingredient: "red onion"},
    {ingredient: "balsamic vinaigrette dressing"},
    
    

]

const Chickensalad = () => {

    const recipeData = {
        title: "Chicken Salad Recipe",
        heading: "Classic Chicken Salad Recipe",
        image: chickensalad,
        ingredients: [
            "2 boneless, skinless chicken breasts",
            "Salt and pepper to taste",
            "Olive oil",
            "Mixed salad greens (lettuce, spinach, arugula, etc.)",
            "Cherry tomatoes, halved",
            "Cucumber, sliced",
            "Red onion, thinly sliced",
            "Balsamic vinaigrette dressing"],
        instructions: [
            "1. Preheat the grill or grill pan over medium-high heat.",
            "2. Season the chicken breasts with salt and pepper, and brush them lightly with olive oil.",
            "3. Grill the chicken for about 6-8 minutes per side or until fully cooked (internal temperature reaches 165°F or 74°C).",
            "4. While the chicken is grilling, prepare the salad by combining the mixed greens, cherry tomatoes, cucumber, and red onion in a large bowl.",
            "5. Once the chicken is cooked, let it rest for a couple of minutes before slicing it into thin strips.",
            "6. Arrange the sliced grilled chicken on top of the salad.",
            "7. Drizzle balsamic vinaigrette dressing over the salad and chicken.",
            "8. Toss everything together gently to combine.",
            "9. Serve immediately and enjoy!"],
        buttonLink: "/chickensaladCooking",
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

export default Chickensalad;