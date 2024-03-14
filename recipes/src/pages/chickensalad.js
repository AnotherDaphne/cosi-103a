import salad from "./images/chickensalad.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';



const Chickensalad = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
        <h1>Chicken Salad Recipe</h1>
  
          <img class="page_img"src={salad} alt="chicken salad"/>
    
          <h2>Ingredients:</h2>
          <ul>
            <li>2 boneless, skinless chicken breasts</li>
            <li>Salt and pepper to taste</li>
            <li>Olive oil</li>
            <li>Mixed salad greens (lettuce, spinach, arugula, etc.)</li>
            <li>Cherry tomatoes, halved</li>
            <li>Cucumber, sliced</li>
            <li>Red onion, thinly sliced</li>
            <li>Balsamic vinaigrette dressing</li>
          </ul>
          <h2>Instructions:</h2>
            <p>1. Preheat the grill or grill pan over medium-high heat.</p>
            <p>2. Season the chicken breasts with salt and pepper, and brush them lightly with olive oil.</p>
            <p>3. Grill the chicken for about 6-8 minutes per side or until fully cooked (internal temperature reaches 165°F or 74°C).</p>
            <p>4. While the chicken is grilling, prepare the salad by combining the mixed greens, cherry tomatoes, cucumber, and red onion in a large bowl.</p>
            <p>5. Once the chicken is cooked, let it rest for a couple of minutes before slicing it into thin strips.</p>
            <p>6. Arrange the sliced grilled chicken on top of the salad.</p>
            <p>7. Drizzle balsamic vinaigrette dressing over the salad and chicken.</p>
            <p>8. Toss everything together gently to combine.</p>
            <p>9. Serve immediately and enjoy!</p>
            <Link to="/chickensaladCooking">
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
  
  export default Chickensalad;