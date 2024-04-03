// get the nutrition information of the ingredients of a recipe.


 
//add sth to make sure 1000 requirest max- how to test this?
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';



function App() {
  const [nutritiondata, setNutritionaData] = useState([]);
  const [requestcount, setRequestCount] = useState(0);
  const {recipeName} = useParams(); 

  

  useEffect(() => {
    import ( './pages/${recipeName}.js')

    
      .then(module => {
        
        return Promise.all(module.ingredients.map(ingredient => {
          if( requestcount > 1000){ //1000 requests max
            console.log("Max requests reached");
            return;
          }
          return axios.get(`api_endpoint/search?name=${ingredient}`)
          .then(response => {
            return response.data;
          })
          .catch(error => {
            console.error(error);
          });
        }));
      })
      .then(response => {
        setNutritionaData(response);
        setRequestCount(requestcount+1)
      })
      .catch(error => {
        console.error(error);
      });
  
 
},
  [requestcount]);


  return (
    <div>
      <h1> {recipeName} Nutrition Information</h1>
      <ul>
        {nutritiondata.map((response, index) => (
          <React.Fragment key={index}>
            <li>{response.id}</li>
            <h2>{response.name}</h2>
            <p>Calories: {response.calories}</p>
            <p>Protein: {response.protein}</p>
            <p>Fat: {response.fat}</p>
            <p>Carbohydrates: {response.carbohydrates}</p>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default App;




