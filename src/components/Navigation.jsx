import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCart2 } from "react-icons/bs";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#women">WOMEN</Nav.Link>
            <Nav.Link href="#men">MEN</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <img src={Logo} alt="site-logo"/>
          </Nav>
          <Nav>
              <NavDropdown title="$" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">$ USD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">€ Euro</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">¥ JPY</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#cart"><BsCart2/></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;