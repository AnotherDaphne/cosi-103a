import mene from "./images/Menemen.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';


const Menemen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
        <title>Menemen Recipe</title>
        <h1>Menemen Recipe</h1>
        
          <img class="page_img"src={mene} alt="Menemen"/>

          <h2>Ingredients:</h2>
          <ul>
            <li>2 tablespoons olive oil</li>
            <li>1 onion, finely chopped</li>
            <li>2 green peppers, chopped</li>
            <li>2 tomatoes, chopped</li>
            <li>4 eggs</li>
            <li>Salt and pepper to taste</li>
            <li>Red pepper flakes (optional)</li>
            <li>Fresh parsley, chopped (for garnish)</li>
          </ul>
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
          <Link to="/menemenCooking">
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
  
  export default Menemen;