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
        //get the ingredients of the recipe
        
        if(module.ingredients.includes(ingredient)){
          if( requestcount > 1000){ //1000 requests max
            console.log("Max requests reached");
            return;
          }
        }
        const requests=module.ingredients.map(ingredient => {
        const url= "${{ secrets.FOOD_DATA_API }}";
        const params={
          query: ingredient,
          pageSize: 1, //  get the top matching result (not sure if this how to get it)
      
        };
        return axios.get(url, {params});
      });
      return Promise.all(requests);
    })
      .then(response => {
        console.log(response);
        const nutritiondata= response.map(resp =>{
          const topmatchdata= res.data.foods[0]; // get top match
          topmatchdata.detailsUrl=  `https://fdc.nal.usda.gov/fdc-app.html#/food-details/${topmatchdata.fdcId}/nutrients`; 
        
          return topmatchdata;
        })
        setNutritionaData(nutritiondata);
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
        {nutritiondata.map((item, index) => (
          <React.Fragment key={index}>
            <li>ID: {item.fdcId}</li>
            <h2>Description:{item.description}</h2>
            <p> Nutrients: </p>
            <ul>
              {item.foodNutrients.map((nutrition, index) => (
                <li key={index}>
                  {nutrition.nutrientName}: {nutrition.value} {nutrition.unitName}
                </li>
              ))}
            </ul>
            <a href={item.detailsUrl}>View Details</a> {/* add link to the details page, fix other links */}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default App;




