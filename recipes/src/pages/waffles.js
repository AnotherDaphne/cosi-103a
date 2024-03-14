import waff from "./images/waffles.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
const Waffles = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
        <h1>Waffles Recipe</h1>
            <img class="page_img"src={waff} alt="Waffles"width="300px"/>
          <h2> Ingredients:</h2>
          <ul>
              <li>1 cup all-purpose flour </li>
              <li>1 tablespoon sugar </li>
              <li>1 teaspoon baking powder </li>
              <li>1/2 teaspoon baking soda</li>
              <li>1/4 teaspoon salt</li>
              <li>1 cup buttermilk</li>
              <li>1/4 cup unsalted butter, melted</li>
              <li>1 large egg</li>
              <li>1 teaspoon vanilla extract</li>
              <li>Fresh fruits (strawberries, blueberries, bananas, etc.)</li>
              <li>Maple syrup or powdered sugar for drizzling</li>
            </ul>
            <h2>Instructions:</h2>
            <p>1. Preheat your waffle iron according to the manufacturer's instructions.</p>
            <p>2. In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.</p>
            <p>3. In another bowl, whisk together buttermilk, melted butter, egg, and vanilla extract.</p>
            <p>4. Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay.</p>
            <p>5. Lightly grease the waffle iron with cooking spray or a small amount of melted butter.</p>
            <p>6. Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions until the waffles are golden brown and crisp.</p>
            <p>7. Once the waffles are ready, transfer them to a plate and top with your favorite fresh fruits.</p>
            <p>8. Drizzle with maple syrup and enjoy your delicious waffle!</p>
            <Link to="/wafflesCooking">
              <Button>Cooking Mode</Button>
            </Link>
            <Button variant="primary" onClick={handleShow}>
              
            Nutritional Information
            </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nutritional Information</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            {/*Info */}
            <p>Calories: 200</p>
            <p>Fat: 10g</p>
            <p>Protein: 5g</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  };
  
  export default Waffles;