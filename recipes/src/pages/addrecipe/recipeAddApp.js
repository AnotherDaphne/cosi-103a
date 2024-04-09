import Recipe from './addrecipe';
import React, { useState, useEffect } from 'react';


function App() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
    fetch('/api/shows_in_frontend')
    .then(response => response.json())
    .then(data => setRecipes(data))
    .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div>
            {recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe} />
            ))}
            <button id="add-recipe-button" onClick={addRecipe}>
                Add New Recipe
            </button>
        </div>
    );

    function addRecipe() {
        const recipeData = {}; // Fill this with the data for the new recipe
        fetch('/api/shows_in_frontend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipeData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('New Recipe ID:', data.id);
            setRecipes([...recipes, data]); // Add the new recipe to the list
        })
        .catch(error => console.error('Error:', error));
    }

    function App() {
        const [recipes, setRecipes] = useState([]);
        
        useEffect(() => {
        fetch('/api/shows_in_frontend')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error('Error fetching data:', error));
        }, []);
        
        return (
            <div>
                {recipes.map((recipe, index) => (
                    <Recipe key={index} recipe={recipe} />
                ))}
                <button id="add-recipe-button" onClick={addRecipe}>
                    Add New Recipe
                </button>
            </div>
        );

        function addRecipe() {
            const recipeData = {}; // Fill this with the data for the new recipe
            fetch('/api/shows_in_frontend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('New Recipe ID:', data.id);
                setRecipes([...recipes, data]); // Add the new recipe to the list
            })
            .catch(error => console.error('Error:', error));
        }
    }
    function App() {
        const [recipes, setRecipes] = useState([]);
        
        useEffect(() => {
        fetch('/api/shows_in_frontend')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error('Error fetching data:', error));
        }, []);
        
        function addRecipe() {
            const recipeData = {}; // Fill this with the data for the new recipe
            fetch('/api/shows_in_frontend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('New Recipe ID:', data.id);
                setRecipes([...recipes, data]); // Add the new recipe to the list
            })
            .catch(error => console.error('Error:', error));
        }

        return (
            <div>
                {recipes.map((recipe, index) => (
                    <Recipe key={index} recipe={recipe} />
                ))}
                <button id="add-recipe-button" onClick={addRecipe}>
                    Add New Recipe
                </button>
            </div>
        );
    }
}

    export default App;
