import React from 'react';
import { Navbar, Container, Nav, Offcanvas, } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import{PaginasApps} from '../data/PaginasApps';
class Menu extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
    return (
      <Navbar bg="light" expand={false}>
         <img
            className="logo-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
          />
  <Container fluid>
    <Navbar.Brand href="#">Menu</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          {PaginasApps.map ((item) =>{
            return (
              <Nav.Link as={Link} to={item.path}>
              {item.title}</Nav.Link>
            );
          })}
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    );
  }
}
export default Menu;