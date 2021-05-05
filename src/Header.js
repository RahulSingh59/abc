import React from 'react'
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap'
export default function header() {
    return (
        <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  
      <Nav.Link href="#learn ">Learn</Nav.Link>
      <Nav.Link href="#build ">Build</Nav.Link>
      <Nav.Link href="#engage ">Engage</Nav.Link>
      <Nav.Link href="#earn ">Earn</Nav.Link>
    
    
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}

