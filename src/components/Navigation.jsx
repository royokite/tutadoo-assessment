import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCart2 } from 'react-icons/bs';
import { useCart } from 'react-use-cart';
import '../styles/customs.css'

const Navigation = ({ handleShow }) => {

    const { totalItems } = useCart();

    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto font-semibold">
            <Nav.Link href="#women">WOMEN</Nav.Link>
            <Nav.Link href="#men">MEN</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <a href="/">
              <img src="/site-logo.png" alt="site-logo" width={40} height={40}/>
            </a>
          </Nav>
          <Nav>
              <NavDropdown title="$" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#USD" className='font-bold text-lg text-center'>$ USD</NavDropdown.Item>
                <NavDropdown.Item href="#Euro" className='font-bold text-lg text-center'>€ Euro</NavDropdown.Item>
                <NavDropdown.Item href="#Yen" className='font-bold text-lg text-center'>¥ JPY</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" className='relative' onClick={handleShow}>
                <BsCart2/>
                <span className="position-absolute top-6 -right-2 translate-middle badge rounded-pill bg-dark p-1 pb-2" style={{width: '1rem', height: '1rem'}}>
                  {totalItems}
                </span>
                </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
