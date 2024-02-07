import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import waffles from "./Belgian-Waffles-4.jpg";
import cheesecake from "./cheesecake.jpg";
import chickensalad from "./chickensalad.jpg";
import cinnamonrolls from "./cinnamonrolls.jpg";
import kungpaochicken from "./kungpaochicken.jpeg";
import agliolio from "./Shrimp-Aglio-Olio.jpeg";
import menemen from "./Menemen.jpeg"; 


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function cards() {
  return (
    <CardGroup class="cards">
      <Card>
        <Card.Img variant="top" src={menemen} width="150px"/>
        <Card.Body>
          <Card.Title>Menemen</Card.Title>
          <Card.Text>
            Scrambled eggs with tomatoes, peppers, and spices.
          </Card.Text>
        <a href="Menemen.html">
        <Button>Go To Recipe</Button>
        </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={waffles} height="150px"/>
        <Card.Body>
          <Card.Title>Belgian Waffles</Card.Title>
          <Card.Text>
          Delicious Waffles with fruits!
          </Card.Text>
          <a href="Waffles.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={cheesecake} width="150px"/>
        <Card.Body>
          <Card.Title>Cheesecake</Card.Title>
          <Card.Text>
              Sweet and rich dessert
              perfect for any occasion!
              <p> 
              <br></br> 
              </p>
              
          </Card.Text>
          <a href="Cheesecake.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={chickensalad} width="150px"/>
        <Card.Body>
          <Card.Title>Chicken Salad</Card.Title>
          <Card.Text>
            Delicious, healthy, and 
            quick recipe for on the go!
          </Card.Text>
          <a href="Chickensalad.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={kungpaochicken} width="150px"/>
        <Card.Body>
          <Card.Title>Kung Pao Chicken</Card.Title>
          <Card.Text>
            Your new favorite if you like spicy and savory food!
          </Card.Text>
          <a href="kungpaochicken.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={cinnamonrolls} width="150px"/>
        <Card.Body>
          <Card.Title>Cinnamon Rolls</Card.Title>
          <Card.Text>
            Aromatic and delicious delight!
          </Card.Text>
         <a href="CinnamonRolls.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={agliolio} width="150px"/>
        <Card.Body>
          <Card.Title>Shrimp Aglio Olio</Card.Title>
          <Card.Text>
            Shrimp and pasta unite in a deliciously simple dish with flavor and texture.
          </Card.Text>
          <a href="spaghetti.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>
    </CardGroup>
  );
  
/*function App() {
  return (
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Dessert: Fruit Topped Waffles </Accordion.Header>
        <Accordion.Body>
        <img src= {waffles} alt= "waffles" width="250px"></img>
       <h2> Ingredients:</h2>
       <p>1 cup all-purpose flour </p>
       <p>1 tablespoon sugar </p>
       <p>1 teaspoon baking powder </p>
       <p>1/2 teaspoon baking soda</p>
       <p>1/4 teaspoon salt</p>
       <p>1 cup buttermilk</p>
       <p>1/4 cup unsalted butter, melted</p>
       <p>1 large egg</p>
       <p>1 teaspoon vanilla extract</p>
       <p>Fresh fruits (strawberries, blueberries, bananas, etc.)</p>
       <p>Maple syrup or powdered sugar for drizzling</p>
       <h2>Instructions:</h2>
       <p>1. Preheat your waffle iron according to the manufacturer's instructions.</p>
       <p>2. In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.</p>
       <p>3. In another bowl, whisk together buttermilk, melted butter, egg, and vanilla extract.</p>
       <p>4. Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay.</p>
       <p>5. Lightly grease the waffle iron with cooking spray or a small amount of melted butter.</p>
       <p>6. Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions until the waffles are golden brown and crisp.</p>
       <p>7. Once the waffles are ready, transfer them to a plate and top with your favorite fresh fruits.</p>
       <p>8. Drizzle with maple syrup and enjoy your delicious waffle!</p>
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="1">
        <Accordion.Header>2. Dessert: Cinnamon Rolls</Accordion.Header>
        <Accordion.Body>
        <img src= {cinnamonrolls} alt= "cinnamonrolls" width="250px"></img>
          <h2>Ingredients:</h2>
          <p>1 sheet of store-bought puff pastry</p>
          <p>2 tablespoons melted butter</p>
          <p> 1/4 cup of brown sugar</p>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Dessert: Cheesecake</Accordion.Header>
        <Accordion.Body>
        <img src= {cheesecake} alt= "cheesecake" width="250px"></img>
         <h2>Ingredients:</h2>
         <p>2 cups graham cracker crumbs</p>
         <p>1/2 cup unsalted butter, melted</p>
         <p>4 packages (8 oz each) cream cheese, softened</p>
         <p>1 cup granulated sugar</p>
         <p>1 teaspoon vanilla extract</p>
         <p>4 large eggs</p>
         <p>1 cup sour cream</p>
         <h3>Instructions:</h3>
         <p>1. Preheat your oven to 325°F (163°C).</p>
         <p>2. Mix graham cracker crumbs and melted butter. Press the mixture into the bottom of a 9-inch springform pan to create the crust.</p>
         <p>3. Bake the crust in the preheated oven for 10 minutes. Remove and let it cool.</p>
         <p>4. In a large mixing bowl, beat the softened cream cheese until smooth. Add sugar and vanilla extract, continue beating until well combined.</p>
         <p>5. Add eggs one at a time, beating well after each addition. Mix in the sour cream until the batter is smooth.</p>
         <p>6. Pour the cream cheese mixture over the cooled crust in the springform pan.</p>
         <p>7. Bake in the preheated oven for 50-60 minutes or until the center is set. The edges should be slightly golden, and the center should have a slight jiggle.</p>
         <p>8. Allow the cheesecake to cool in the oven with the door ajar for about an hour. Refrigerate for at least 4 hours or overnight before serving.</p>
         <p>9. Once chilled, run a knife around the edge of the pan before releasing the springform sides.</p>
         <p>10. Slice and serve your delicious homemade cheesecake!</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
      
        <Accordion.Header>4. Dinner: Grilled Chicken and Salad</Accordion.Header>
        <Accordion.Body>
        <img src= {chickensalad} alt= "Grilled Chicken and Salad" width="250px"></img>
          <h2>Ingredients:</h2>
          <p>2 boneless, skinless chicken breasts</p>
          <p>Salt and pepper to taste</p>
          <p>Olive oil</p>
          <p>Mixed salad greens (lettuce, spinach, arugula, etc.)</p>
          <p>Cherry tomatoes, halved</p>
          <p>Cucumber, sliced</p>
          <p>Red onion, thinly sliced</p>
          <p>Balsamic vinaigrette dressing</p>
          <h2>Instructions:</h2>
          <p>1. Preheat the grill or grill pan over medium-high heat.</p>
          <p>2. Season the chicken breasts with salt and pepper, and brush them lightly with olive oil.</p>
          <p>3. Grill the chicken for about 6-8 minutes per side or until fully cooked (internal temperature reaches 165°F or 74°C).</p>
          <p>4. While the chicken is grilling, prepare the salad by combining the mixed greens, cherry tomatoes, cucumber, and red onion in a large bowl.</p>
          <p>5. Once the chicken is cooked, let it rest for a couple of minutes before slicing it into thin strips.</p>
          <p>6. Arrange the sliced grilled chicken on top of the salad.</p>
          <p>7. Drizzle balsamic vinaigrette dressing over the salad and chicken.</p>
          <p>8. Toss everything together gently to combine.</p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Dinner: Kung Pao Chicken 宫保鸡</Accordion.Header>
        <Accordion.Body>
        <img src= {kungpaochicken} alt= "Kung Pao Chicken" width="250px"></img>
        <h2>Ingredients:</h2>
        <p>1 lb boneless, skinless chicken breasts, cut into bite-sized pieces</p>
        <p>2 tablespoons soy sauce</p>
        <p>1 tablespoon rice vinegar</p>
        <p>1 tablespoon hoisin sauce</p>
        <p>1 tablespoon cornstarch</p>
        <p>1 tablespoon vegetable oil</p>
        <p>3 cloves garlic, minced</p>
        <p>1 teaspoon ginger, minced</p>
        <p>1/2 cup unsalted peanuts</p>
        <p>2 green onions, sliced</p>
        <p>1/2 cup diced red bell pepper</p>
        <p>1/2 cup diced green bell pepper</p>
        <p>1/4 cup water</p>
        <p>2 tablespoons chili garlic sauce (adjust to taste)</p>
        <p>Cooked rice for serving</p>
        <h2>Instructions:</h2>
        <p>1. In a bowl, combine soy sauce, rice vinegar, hoisin sauce, and cornstarch. Add the chicken pieces and marinate for about 15-20 minutes.</p>
        <p>2. Heat vegetable oil in a wok or large skillet over medium-high heat. Add minced garlic and ginger, sauté for about 30 seconds until fragrant.</p>
        <p>3. Add marinated chicken to the wok and stir-fry until browned and cooked through.</p>
        <p>4. Add diced red and green bell peppers, peanuts, and sliced green onions.</p>
        <p>5. Pour in water and chili garlic sauce. Stir-fry for another 1-2 minutes until the sauce thickens.</p>
        <p>6. Serve the Kung Pao chicken with cooked rice.</p>
        <p>7. Serve the Kung Pao Chicken over cooked rice and garnish with additional green onions and peanuts if desired.</p>
        <p>8. Dig in to your home cooked Sichuan Kung Pao Chicken!</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>6. Dinner: Spaghetti Aglio e Olio with Shrimp</Accordion.Header>
        <Accordion.Body>
        <img src= {agliolio} alt= "Aglio e Olio" width="250px"></img>
        <h2>Ingredients:</h2>
        <p>8 oz spaghetti</p>
        <p>2 tablespoons olive oil</p>
        <p>3 cloves garlic, minced</p>
        <p>1/2 teaspoon red pepper flakes</p>
        <p>1/2 lb shrimp, peeled and deveined</p>
        <p>Juice of 1 lemon</p>
        <p>2 tablespoons fresh parsley, chopped</p>
        <p>Salt and pepper to taste</p>
        <h2>Instructions:</h2>
        <p>1. Cook spaghetti according to package instructions, then drain and set aside.</p>
        <p>2. In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant.</p>
        <p>3. Add red pepper flakes for a spicy kick and stir in peeled shrimp until they turn pink.</p>
        <p>4. Toss the cooked spaghetti into the pan, coating it in the flavorful oil.</p>
        <p>5. Squeeze fresh lemon juice over the dish and sprinkle with chopped parsley.</p>
        <p>6. Season with salt and pepper.</p>
        <p>7. Serve your delicious Spaghetti Aglio e Olio with Shrimp!</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>7. Breakfast: Menemen</Accordion.Header>
        <Accordion.Body>
        <img src= {menemen} alt= "Menemen" width="250px"></img>
        <h2>Ingredients:</h2>
        <p>2 tablespoons olive oil</p>
        <p>1 onion, finely chopped</p>
        <p>2 green peppers, chopped</p>
        <p>2 tomatoes, chopped</p>
        <p>4 eggs</p>
        <p>Salt and pepper to taste</p>
        <p>Red pepper flakes (optional)</p>
        <p>Fresh parsley, chopped (for garnish)</p>
        <h2>Instructions:</h2>
        <p>1. Sauté Vegetables:</p>
        <p>2. Heat olive oil in a large skillet over medium heat.</p>
        <p>3. Add finely chopped onions and cook until they become translucent.</p>
        <p>4. Add chopped green peppers to the skillet and sauté until they soften.</p>
        <p>5. Stir in chopped tomatoes and cook until they release their juices and start to break down.</p>
        <p>6. Season the mixture with salt and pepper to taste. Add red pepper flakes if you like prefer it spicy.</p>
        <p>7. Make four wells in the vegetable mixture using a spoon.</p>
        <p>8. Crack an egg into each well. Allow the eggs to cook until the whites are set but the yolks are still runny.</p>
        <p>9. Cover the skillet and cook for a few more minutes until the egg whites are fully cooked, or cook longer if you prefer firmer yolks.</p>
        <p>10. Sprinkle chopped fresh parsley over the top and serve immediately.</p>
        <p>11. Enjoy your freshly made Turkish Menemen!</p>

        </Accordion.Body>
      </Accordion.Item> }
    </Accordion>
  );
} */

  // return (
  //   <>

  //   <div class="cards">
  //     <img src = {menemen} width="150px" alt="Menemen"></img>
  //     <h4>Menemen</h4>
  //     <p>recipe description here</p>
  //     <a href="Menemen.html">
  //       <button> link to recipe</button>
  //     </a>
  //   {/* </div> */}

  //   {/* <div class="cards"> */}
  //     <img src={waffles} width="150px" alt="Waffles"></img>
  //     <h4>Belgian Waffles</h4>
  //     <p>recipe description here</p>
  //     <a href="Menemen.html">
  //       <button> link to recipe</button>
  //     </a>
  //   {/* </div> */}

  //   <div class="cards">
  //     <img src={cheesecake} width="150px" alt="Cheesecake"></img>
  //     <h4>Cheesecake</h4>
  //     <p>recipe description here</p>
  //     <a href="Menemen.html">
  //       <button> link to recipe</button>
  //     </a>
  //   </div>

  //   {/* <div class="cards"> */}
  //     <img src={chickensalad} width="150px" alt="Chicken Salad"></img>
  //     <h4>Chicken Salad</h4>
  //     <p>recipe description here</p>
  //     <a href="Menemen.html">
  //       <button> link to recipe</button>
  //     </a>
  //   {/* </div> */}

  //   {/* <div class="cards"> */}
  //     <img src={cinnamonrolls} width="150px" alt="Cinnamon Rolls"></img>
  //     <h4>Cinnamon Rolls</h4>
  //     <p>recipe description here</p>
  //     <a href="Menemen.html">
  //       <button> link to recipe</button>
  //     </a>
  //   {/* </div> */}

  //   {/* <div class="cards"> */}
  //     <img src={kungpaochicken} width="150px" alt="Kung Pao Chicken"></img>
  //     <h4>Kung Pao Chicken</h4>
  //     <p>recipe description here</p>
  //     <a href="Menemen.html">
  //       <button> link to recipe</button>
  //     </a>
  //   {/* </div> */}

  //   {/* <div class="cards"> */}
  //     <img src={agliolio} width="150px" alt="Shrimp Aglio Olio"></img>
  //     <h4>Shrimp Aglio Olio</h4>
  //     <p>recipe description here</p>
  //     <a href="Menemen.html">
  //       <button> link to recipe</button>
  //     </a>
  //   </div>

  //   </>
  // );
}

export default cards;
