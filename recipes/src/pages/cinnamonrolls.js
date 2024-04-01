import React from 'react';
import Recipe from './recipesData.js';
import cinnamonrolls from "./images/cinnamonrolls.jpg";

const Cinnamonrolls = () => {

    const ingredients=[
        {ingredient: "puff pastry"},
        {ingredient: "butter"},
        {ingredient: "brown sugar"},
        {ingredient: "ground cinnamon"},
        {ingredient: "powdered sugar"}, //optional
        {ingredient: "milk"} //optional
    
    ]
    const recipeData = {
        title: "Cinnamon Rolls Recipe",
        heading: "Classic Cinnamon Rolls Recipe",
        image: cinnamonrolls,
        ingredients: [
            "1 sheet of puff pastry",
            "2 tablespoons melted butter",
            "1/4 cup brown sugar",
            "1 teaspoon ground cinnamon",
            "Icing (optional): Powdered sugar and a little milk"],
        instructions: [
            "1. Preheat your oven according to the puff pastry package instructions.",
            "2. Roll out the puff pastry sheet on a lightly floured surface.",
            "3. Brush the melted butter over the entire surface of the pastry.",
            "4. Sprinkle brown sugar evenly over the buttered pastry.",
            "5. Dust the cinnamon over the sugar layer.",
            "6. Roll the pastry sheet tightly into a log.",
            "7. Cut the log into 1-inch slices and place them on a baking sheet lined with parchment paper.",
            "8. Bake in the preheated oven for the time specified on the puff pastry package or until the rolls are golden brown.",
            "9. Optional: Mix powdered sugar with a small amount of milk to create a simple icing. Drizzle over the warm cinnamon rolls.",
            "10. Dig into your warm cinnamon rolls!"],
        buttonLink: "/cinnamonrollsCooking",
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

export default Cinnamonrolls;