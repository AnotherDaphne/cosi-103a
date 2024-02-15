import 'bootstrap/dist/css/bootstrap.min.css';
import catdefault from "./images/catdefault.jpg";
import tardis from "./images/tardis.jpg";
import teampage from "./images/teamimage.jpg";
import othello from  "./images/othello.jpg";
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Meowkenzie from "./images/Meowkenzie.jpg";
import Card from 'react-bootstrap/Card';

const PINK = 'rgba(255, 192, 203, 0.6)';
const BLUE = 'rgba(0, 0, 255, 0.6)';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Team = () => {
    
    return(
      <div>
        <title>Team Page</title>
        <h1>Meet the Team!</h1>
        <img class="page_img"src={teampage} alt="team"/>

        <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Meet Othello!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <img class="page_img"src={othello} alt="meowkenzie"/>
            <p>
            Hello, I am Othello. I am a cat. I like food.
              </p>
              <p> 
                Can I have your liver?
                </p>
              </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="1">Meet Meow-kenzie!</ContextAwareToggle>
        
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          <img class="page_img"src={Meowkenzie} alt="meowkenzie" width="300px"/>
          
            <p>
            I am a friendly feline. 
            </p>
            <p>
            When I'm not stressed about CS assignments and problems sets, I like to spend most of my time lazing around!
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="2">Meet Tardis!</ContextAwareToggle>
        
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
          <img class="page_img"src={tardis} alt="tardis" width="400px"/>
          
            <p>
            Hi! I'm Tardis
            </p>
            <p>
            I travel in time and eat food.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      
    <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="3">Meet V!</ContextAwareToggle>
        
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
          <img class="page_img"src={catdefault} alt="v" width="300px"/>
          
            <p>
            Hi!
            </p>
            <p>
            When i'm not dancing or listening to music, I'll probably be reading a book next to my squishmallows.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

      

      </div>
      
    )

    
  };
  
  export default Team;