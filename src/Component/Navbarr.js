import React from 'react'
import { Container,  Form,  Nav, Navbar, NavDropdown } from 'react-bootstrap'
const Navbarr = ({setInputSearch ,inputSearch}) => {
  
  return (
    <div>
      
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NETLFIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Account</Nav.Link>
            <NavDropdown title="Watch later" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form.Control type="email" placeholder="Search movie"
        onChange={(e)=>setInputSearch(e.target.value)}
        value={inputSearch}/>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr
