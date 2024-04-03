
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './recipesData.js';
import cheesecake from "./images/cheesecake.jpg";
//import {getNutritionData} from './api_nutrition.js';

export const ingredients= [
        
    {ingredient: "graham cracker crumbs"},
    {ingredient: "butter"},
    {ingredient: "cream cheese"},
    {ingredient: "white sugar"},
    {ingredient: "vanilla extract"},
    {ingredient: "egg"},
    {ingredient: "heavy cream"},

]

const Cheesecake = () => {
    const [nutritionData, setNutritionData] = useState([]);
    const [requestCount, setRequestCount] = useState(0);

    
    useEffect(() => {
        Promise.all(ingredients.map(ingredient => {
            if(requestCount > 1000) {
                console.log("Max requests reached");
                return;
            }
            return axios.get(`api_endpoint/search?name=${ingredient.ingredient}`)
            .then(response => {
                const ingredientID = response.data[0].id;
                return axios.get(`api_endpoint/${ingredientID}`);
            })
            .then (response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });
        }))
        .then(response => {
            setNutritionData(response);
            setRequestCount(requestCount+1);
        })
        .catch(error => {
            console.error(error);
        });
    }, [requestCount]);

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
        nutritionInfo: nutritionData
        
    };

    return (
        <div>
            <Recipe {...recipeData} />
        </div>
    );
};

export default Cheesecake;