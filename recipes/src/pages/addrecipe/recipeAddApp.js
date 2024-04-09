import Recipe from './addrecipe';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
    fetch('/api/shows_in_frontend')
    .then(response => response.json())
    .then(data => setRecipes(data))
    .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
          <Routes>
            <Route path="/addrecipe" element={<Recipe />} />
            <Route path="/">
              <div>
                {recipes.map((recipe, index) => (
                  <Recipe key={index} recipe={recipe} />
                ))}
                <button id="add-recipe-button" onClick={Recipe}>
                  Add New Recipe
                </button>
              </div>
            </Route>
          </Routes>
        </Router>
      );
    
}
export default App;
fetch('/api/shows_in_frontend', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(Recipe),
})
.then(response => response.json())
.then(data => console.log('New Recipe ID:', data.id))
.catch(error => console.error('Error:', error));
    

