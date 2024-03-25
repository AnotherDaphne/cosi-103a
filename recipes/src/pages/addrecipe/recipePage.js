import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Recipe = () => {
    // const location = useLocation();
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    // const [recipe, setRecipe] = useState(location.state.recipe);

    useEffect(() => {
        fetch(`/api/recipes/${id}`)
        //need to find the correct api endpoint
          .then(response => response.json())
          .then(data => {
            onRecipeData(data);
          })
          .catch(error => console.error('Error:', error));
      }, [id, onRecipeData]);


  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe">
      <title>{title}</title>
      <h2>{heading}</h2>
      <img height={100} width= {100} src={image} alt={title} />
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ul>
        {instructions.map((instruction, index) => (
          <ol key={index}>{instruction}</ol>
        ))}
      </ul>
      <a href={buttonLink}><Button>Cooking Mode</Button></a>
      <Button variant="primary" onClick={handleShow}>    
        Nutritional Information
      </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nutritional Information</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <ul>
              {nutritionInfo.map((nutritionInfo, index) => (
                <ol key={index}>{nutritionInfo}</ol>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    </div>
  );
};

export default Recipe;