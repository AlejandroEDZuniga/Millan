import React from "react";
import {Navbar, Container, Link, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "../assets/styles/Home.css"


const Header = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
      <img className="homeImg"src="https://familiamillan.com/wp-content/uploads/2022/03/cropped-LOGO-BLANCO.png"/>
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
};

export default Header;
