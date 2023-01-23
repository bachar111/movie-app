import React from 'react'
import { Container,  Form,  Nav, Navbar,  } from 'react-bootstrap'
const Navbarr = ({setInputSearch ,inputSearch}) => {
  
  return (
    <div>
      
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">NETLFIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Downloads">Downloads</Nav.Link>
            <Nav.Link href="/Account">Account</Nav.Link>
     
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
