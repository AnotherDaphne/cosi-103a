import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import menemen from "./images/Menemen.jpeg";
import waffles from "./images/waffles.jpg";
import cheesecake from "./images/cheesecake.jpg";
import chickensalad from "./images/chickensalad.jpg";
import cinnamonrolls from "./images/cinnamonrolls.jpg";
import kungpaochicken from "./images/kungpaochicken.jpeg";
import agliolio from "./images/spaghetti.jpeg";

import "./style.css";

import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div>
        <h1>Classic Meals for the Whole Family</h1>
        <CardGroup class="cards">
              <Card>
                <Card.Img variant="top" src={menemen} width="150px"/>
                <Card.Body>
                  <Card.Title>Menemen</Card.Title>
                  <Card.Text>
                    Scrambled eggs with tomatoes, peppers, and spices.
                  </Card.Text>
                    <Link to="/menemen">
                        <Button>Go To Recipe</Button>
                    </Link>
                </Card.Body>
              </Card>
              <Card >
                <Card.Img variant="top" src={waffles} height="150px"/>
                <Card.Body>
                  <Card.Title>Belgian Waffles</Card.Title>
                  <Card.Text>
                    Delicious Pile of Waffles
                  </Card.Text>
                    <Link to="/waffles">
                        <Button>Go To Recipe</Button>
                    </Link>
                
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={cheesecake} width="150px"/>
                <Card.Body>
                  <Card.Title>Cheesecake</Card.Title>
                  <Card.Text>
                      Sweet and rich dessert
                      perfect for any occasion!                   
                  </Card.Text>
                  <Link to="/cheesecake">
                      <Button>Go To Recipe</Button>
                  </Link>
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
                  <Link to="/chickensalad">
                      <Button>Go To Recipe</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card >
                <Card.Img variant="top" src={kungpaochicken} width="150px"/>
                <Card.Body>
                  <Card.Title>Kung Pao Chicken</Card.Title>
                  <Card.Text>
                    Tasty chicken, rice, and vegetables
                  </Card.Text>
                  <Link to="/kungpaochicken">
                      <Button>Go To Recipe</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card >
                <Card.Img variant="top" src={cinnamonrolls} width="150px"/>
                <Card.Body>
                  <Card.Title>Cinnamon Rolls</Card.Title>
                  <Card.Text>
                    A delicous cinnamon treat
                  </Card.Text>
                  <Link to="/cinnamonrolls">
                      <Button>Go To Recipe</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card >
                <Card.Img variant="top" src={agliolio} width="150px"/>
                <Card.Body>
                  <Card.Title>Shrimp Aglio Olio</Card.Title>
                  <Card.Text>
                    Tasty spaghetti, shrimp, and spice
                  </Card.Text>
                  <Link to="/spaghetti">
                      <Button>Go To Recipe</Button>
                  </Link>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
    );
  };
  
  export default Home;