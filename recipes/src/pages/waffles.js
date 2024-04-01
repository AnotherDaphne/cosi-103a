import React from 'react';
import Recipe from './recipesData.js';
import waffles from "./images/waffles.jpg";

export const ingredients = [
    { ingredient: "all-purpose flour" },
    { ingredient: "sugar" },
    { ingredient: "baking powder" },
    { ingredient: "baking soda" },
    { ingredient: "salt" },
    { ingredient: "buttermilk" },
    { ingredient: "unsalted butter" },
    { ingredient: "egg" },
    { ingredient: "vanilla extract" },
    { ingredient: "fresh fruits (strawberries, blueberries, bananas, etc.)" },
    { ingredient: "maple syrup or powdered sugar for drizzling" }
]

const Waffle = () => {

    const recipeData = {
        title: "Belgian Waffles Recipe",
        heading: "Classic Belgian Waffles Recipe",
        image: waffles,
        ingredients: [
            "1 cup all-purpose flour",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt",
            "1 cup buttermilk",
            "1/4 cup unsalted butter, melted",
            "1 large egg",
            "1 teaspoon vanilla extract",
            "Fresh fruits (strawberries, blueberries, bananas, etc.)",
            "Maple syrup or powdered sugar for drizzling"],
        instructions: [
            "1. Preheat your waffle iron according to the manufacturer's instructions.",
            "2. In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.",
            "3. In another bowl, whisk together buttermilk, melted butter, egg, and vanilla extract.",
            "4. Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay.",
            "5. Lightly grease the waffle iron with cooking spray or a small amount of melted butter.",
            "6. Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions until the waffles are golden brown and crisp.",
            "7. Once the waffles are ready, transfer them to a plate and top with your favorite fresh fruits.",
            "8. Drizzle with maple syrup and enjoy your delicious waffle!"],
        buttonLink: "/waffleCooking",
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

export default Waffle;