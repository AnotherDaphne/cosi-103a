import spaghet from "./images/spaghetti.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';


const Spaghetti = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
        <title>Shrimp-Aglio-Olio Recipe</title>
        <h1>Shrimp-Aglio-Olio Recipe</h1>
          <img class="page_img" src={spaghet} alt="Shrimp-Aglio-Olio"/>
          <h2>Ingredients:</h2>
          <ul>
            <li>8 oz spaghetti</li>
            <li>2 tablespoons olive oil</li>
            <li>3 cloves garlic, minced</li>
            <li>1/2 teaspoon red pepper flakes</li>
            <li>1/2 lb shrimp, peeled and deveined</li>
            <li>Juice of 1 lemon</li>
            <li>2 tablespoons fresh parsley, chopped</li>
            <li>Salt and pepper to taste</li>
          </ul>
          <h2>Instructions:</h2>
            <p>1. Cook spaghetti according to package instructions, then drain and set aside.</p>
            <p>2. In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant.</p>
            <p>3. Add red pepper flakes for a spicy kick and stir in peeled shrimp until they turn pink.</p>
            <p>4. Toss the cooked spaghetti into the pan, coating it in the flavorful oil.</p>
            <p>5. Squeeze fresh lemon juice over the dish and sprinkle with chopped parsley.</p>
            <p>6. Season with salt and pepper.</p>
            <p>7. Serve your delicious Spaghetti Aglio e Olio with Shrimp!</p>
            <Link to="/spaghettiCooking">
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
  
  export default Spaghetti;