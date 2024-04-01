import React from 'react';
import Recipe from './recipesData.js';
import cheesecake from "./images/cheesecake.jpg";


const Cheesecake = () => {

    const ingredients= [
        {ingredient: "graham cracker crumbs"},
        {ingredient: "butter"},
        {ingredient: "cream cheese"},
        {ingredient: "white sugar"},
        {ingredient: "vanilla extract"},
        {ingredient: "egg"},
        {ingredient: "heavy cream"},
    
    ]

    const recipeData = {
        title: "Cheesecake Recipe",
        heading: "Classic Cheesecake Recipe",
        image: cheesecake,
        ingredients: [
            "1 1/2 cups graham cracker crumbs",
            "1/2 cup butter, melted",
            "4 (8 ounce) packages cream cheese",
            "1 1/4 cups white sugar",
            "1 teaspoon vanilla extract",
            "4 eggs",
            "2/3 cup heavy cream"],
        instructions: [
            "1. Preheat your oven to 325°F (163°C).",
            "2. Mix graham cracker crumbs and melted butter. Press the mixture into the bottom of a 9-inch springform pan to create the crust.",
            "3. In a large mixing bowl, beat the softened cream cheese until smooth. Add sugar and vanilla extract, continue beating until well combined.",
            "4. Add eggs one at a time, beating well after each addition. Mix in the heavy cream until the batter is smooth.",
            "5. Pour the cream cheese mixture over the crust in the springform pan.",
            "6. Bake in the preheated oven for 55-60 minutes or until the center is set. The edges should be slightly golden, and the center should have a slight jiggle.",
            "7. Allow the cheesecake to cool in the oven with the door ajar for about an hour. Refrigerate for at least 4 hours or overnight before serving.",
            "8. Once chilled, run a knife around the edge of the pan before releasing the springform sides.",
            "9. Slice and serve your delicious homemade cheesecake!"],
        buttonLink: "/cheesecakeCooking",
        nutritionInfo: [
            "Calories: 200",
            "Fat: 10g",
            "Protein: 5g"
        ]
    };

    return (
        <div>
            <Recipe {...recipeData} />
        </div>
    );
};

export default Cheesecake;