import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "../assets/styles/Home.css";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <img
          className="homeImg"
          src="https://familiamillan.com/wp-content/uploads/2022/03/cropped-LOGO-BLANCO.png"
        />
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="navbar-brand ml-5">
              Home
            </Link>
            <Link to="/login" className="navbar-brand ml-5">
              Login
            </Link>
            <Link to="/add" className="navbar-brand ml-5">
              Add
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
