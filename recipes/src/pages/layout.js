import {Outlet} from "react-router-dom";
import { useState } from 'react';
import GroceryList from "./grocerylist/grocerylist";
import { Form, NavDropdown, Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';

export default function Layout() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function handleRecipeShow() {
    let text;
    let newRecipe = prompt("Enter the JSON of the new recipe: ", text);

  };

  
// Add a navigation bar to the layout
  return (
      <>
        <Navbar bg="light" data-bs-theme="light" sticky="top" >
          <Container>
            <Navbar.Brand to="/">😋Tasty Recipes</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/team">Meet the Team</Nav.Link>
              <Nav.Link variant="primary" onClick={handleShow}>
                Grocery List
              </Nav.Link>
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
          </Container>
        </Navbar>
        <Outlet />
      </>
      
    )
  };
