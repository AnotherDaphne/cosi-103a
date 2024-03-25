import {Outlet} from "react-router-dom";
import { useState } from 'react';
import GroceryList from "./grocerylist/grocerylist";
import AddRecipe from './addrecipe/addrecipe.js'; 
// import RecipePage from './addrecipe/recipePage.js';
import { NavDropdown, Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';

export default function Layout() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newRecipe, setNewRecipe] = useState(null);
  const [activeComponent, setActiveComponent] = useState('home');
  
  function handleRecipeShow() {
    let text;
    let recipe = prompt("Enter the JSON of the new recipe: ", text);
    setNewRecipe(recipe);
    setActiveComponent('addRecipe'); 

  };

  
  // const [recipeData, setRecipeData] = useState(null);

  // const handleRecipeData = (data) => {
  //   setRecipeData(data);
  // };

  
// Add a navigation bar to the layout
  return (
      <>
        <Navbar bg="light" data-bs-theme="light" sticky="top" >
          <Container>
            <Navbar.Brand to="/">😋Tasty Recipes</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/" onClick={() => setActiveComponent('home')}>Home</Nav.Link>
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Nav.Link href="/team">Meet the Team</Nav.Link>
              <Nav.Link variant="primary" onClick={handleShow}>
                Grocery List
              </Nav.Link>
              {activeComponent === 'addRecipe' && <AddRecipe recipe={newRecipe} />} {/* Only render AddRecipe if activeComponent is 'addRecipe' */}
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <p></p>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <GroceryList >
                    </GroceryList>
                </Offcanvas.Body>
              </Offcanvas>
              <NavDropdown title="Add a Recipe" id="basic-nav-dropdown">
                  <NavDropdown.Item variant="primary" onClick={handleRecipeShow}>
                    Add Recipe
                  </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* // Add a button to the navigation bar that displays the title of the recipe
            // incomplete, add back once figured out how to pass data from RecipePage to Layout */}
            {/* {recipeData && <Button>{recipeData.title}</Button>}
            <RecipePage onRecipeData={handleRecipeData} /> */}

          </Container>
        </Navbar>
        <Outlet />
      </>
      
    )
  };
