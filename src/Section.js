import React from 'react'
import {Card,Nav, Button} from "react-bootstrap";
export default function Section() {
    return (
        <div>
            <div className="SU_Section1">
                
                    <h1 class="Hero_hero__title__1zXzr">Automation Anywhere RPA Developer Portal</h1>
                    <h2 class="Hero_hero__subtitle__1MWmG">Ready. Set. Automate.</h2>
            </div>

                {/* cards */}




    <div className="SU_card_outer  container mt-4">     
    <Card border="primary"  style={{ width: '20rem' }}>
    
    <Card.Body>
      <Card.Title>Software Developer:  Start Here</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  

  <Card border="primary" style={{ width: '18rem' }}>
   
    <Card.Body>
      <Card.Title>Business User:  Start Here</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>


  <Card border="primary" style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>CoE Lead: Start Here</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  

  </div>



    </div>
    )
}
