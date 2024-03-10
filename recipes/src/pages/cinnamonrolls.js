import cinnamon from "./images/cinnamonrolls.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const CinnamonRolls = () => {
    return (
      <div>
        <h1>Cinnamon Rolls Recipe</h1>
          <img class="page_img"src={cinnamon} alt="cinnamonrolls"/>
  
          <h2>Ingredients:</h2>
          <p>1 sheet of store-bought puff pastry</p>
          <p>2 tablespoons melted butter</p>
          <p>1/4 cup brown sugar</p>
          <p>1 teaspoon ground cinnamon</p>
          <p>Icing (optional): Powdered sugar and a little milk</p>
          <h2>Instructions:</h2>
          <p>1. Preheat your oven according to the puff pastry package instructions.</p>
          <p>2. Roll out the puff pastry sheet on a lightly floured surface</p>
          <p>3. Brush the melted butter over the entire surface of the pastry.</p>
          <p>4. Sprinkle brown sugar evenly over the buttered pastry.</p>
          <p>5. Dust the cinnamon over the sugar layer.</p>
          <p>6. Roll the pastry sheet tightly into a log.</p>
          <p>7. Cut the log into 1-inch slices and place them on a baking sheet lined with parchment paper.</p>
          <p>8. Bake in the preheated oven for the time specified on the puff pastry package or until the rolls are golden brown.</p>
          <p>9. Optional: Mix powdered sugar with a small amount of milk to create a simple icing. Drizzle over the warm cinnamon rolls.</p>
          <p>10. Dig into your warm cinnamon rolls!</p>
            <Link to="/cinnamonrollsCooking">
              <Button>Cooking Mode</Button>
            </Link>
      </div>
    )
  };
  
  export default CinnamonRolls; 