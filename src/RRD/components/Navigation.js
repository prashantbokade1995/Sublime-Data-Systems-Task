import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>React Router Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/RegisterForm">RegisterForm</Nav.Link>
          <Nav.Link as={Link} to="/RegisterFormNew">RegisterFormNew</Nav.Link>
          <Nav.Link as={Link} to="/TodoApp">TodoApp</Nav.Link>
          <Nav.Link as={Link} to="/Todo">Todo</Nav.Link>
          <Nav.Link as={Link} to="/AppRedux">TodoAppRedux</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
