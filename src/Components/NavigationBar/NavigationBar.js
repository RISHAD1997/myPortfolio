import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";

import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <NavLink to={"/"} className="navBrand">
          <b>
            <Navbar.Brand>
              Port<span style={{ color: "#C21010" }}>folio</span>
            </Navbar.Brand>
          </b>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink to={"/About"} className="navLink">
              About me{" "}
            </NavLink>
            <NavLink to={"/Skills"} className="navLink">
              Skills{" "}
            </NavLink>
            <NavLink to={"/Projects"} className="navLink">
              Project{" "}
            </NavLink>
            <NavLink to={"/Contact"} className="navLink">
              Contact{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
