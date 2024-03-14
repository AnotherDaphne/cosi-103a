import kungpaochicken from "./images/kungpaochicken.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';


const KungPaoChicken = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
        <h1>Sichuan Kung Pao Chicken 宫保鸡 Recipe</h1>
        
          <img class="page_img" src={kungpaochicken} alt="kung pao chicken"/>
          <h2>Ingredients:</h2>
          <ul>
            <li>1 lb boneless, skinless chicken breasts, cut into bite-sized pieces</li>
            <li>2 tablespoons soy sauce</li>
            <li>1 tablespoon rice vinegar</li>
            <li>1 tablespoon hoisin sauce</li>
            <li>1 tablespoon cornstarch</li>
            <li>1 tablespoon vegetable oil</li>
            <li>3 cloves garlic, minced</li>
            <li>1 teaspoon ginger, minced</li>
            <li>1/2 cup unsalted peanuts</li>
            <li>2 green onions, sliced</li>
            <li>1/2 cup diced red bell pepper</li>
            <li>1/2 cup diced green bell pepper</li>
            <li>1/4 cup water</li>
            <li>2 tablespoons chili garlic sauce (adjust to taste)</li>
            <li>Cooked rice for serving</li>
          </ul>
          <h2>Instructions:</h2>
        <p>1. In a bowl, combine soy sauce, rice vinegar, hoisin sauce, and cornstarch. Add the chicken pieces and marinate for about 15-20 minutes.</p>
        <p>2. Heat vegetable oil in a wok or large skillet over medium-high heat. Add minced garlic and ginger, sauté for about 30 seconds until fragrant.</p>
        <p>3. Add marinated chicken to the wok and stir-fry until browned and cooked through.</p>
        <p>4. Add diced red and green bell peppers, peanuts, and sliced green onions.</p>
        <p>5. Pour in water and chili garlic sauce. Stir-fry for another 1-2 minutes until the sauce thickens.</p>
        <p>6. Serve the Kung Pao chicken with cooked rice.</p>
        <p>7. Serve the Kung Pao Chicken over cooked rice and garnish with additional green onions and peanuts if desired.</p>
        <p>8. Dig in to your home cooked Sichuan Kung Pao Chicken!</p>
            <Link to="/kungpaoCooking">
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
  
  export default KungPaoChicken;