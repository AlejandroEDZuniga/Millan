import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "../assets/styles/Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.isLogIn);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <img
            className="homeImg"
            src="https://familiamillan.com/wp-content/uploads/2022/03/cropped-LOGO-BLANCO.png"
          />
        </Link>

        <Container>
          <Nav className="me-auto">
            <Link to="/" className="navbar-brand ml-5">
              Inicio
            </Link>
            {user ? (
              <Nav>
                <Container>
                  <Link to="/login" className="navbar-brand ml-5">
                    Inicio de Sesión
                  </Link>
                </Container>
                <Nav>
                  <Link to="/add" className="navbar-brand ml-5">
                    Agregar Vino
                  </Link>
                </Nav>
                <Nav>
                  <Link to="/edit" className="navbar-brand ml-5">
                    Editar Vinos
                  </Link>
                </Nav>
              </Nav>
            ) : null}
            {/* <Container>
              <Link to="/results" className="navbar-brand ml-5">
                Resultados
              </Link>
            </Container> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
