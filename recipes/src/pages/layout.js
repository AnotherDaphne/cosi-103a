import {Outlet} from "react-router-dom";
import { useState } from 'react';
import GroceryList from "./grocerylist/grocerylist";
import Recipe from './addrecipe/addrecipe.js'; 
import { NavDropdown, Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


export default function Layout() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeComponent, setActiveComponent] = useState('');

  const [recipeInput, setRecipeInput] = useState('');
  const navigate = useNavigate();
  const handleAddRecipe = () => {
    const recipeJson = prompt("Enter the JSON of the new recipe: ");
    setRecipeInput(recipeJson);
  };
  const handleViewRecipe = () => {
    if (recipeInput) {
      //navigates to the addrecipe page only if recipeInput is not empty
      window.location.href = `/addrecipe?recipeInput=${encodeURIComponent(recipeInput)}`;
    }
  };

  
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
              {activeComponent === 'addRecipe' && <Recipe recipe={recipeInput} />}
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
                  <NavDropdown.Item variant="primary" onClick={handleAddRecipe} id="add-recipe-button">
                   Add Recipe
                  </NavDropdown.Item>
                  {/* {recipeInput && <Recipe recipe={recipeInput} />} */}
                  <NavDropdown.Item onClick={handleViewRecipe}>
                    View Recipe
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>

          </Container>
        </Navbar>
        <Outlet />
      </>
      
    )
  };
