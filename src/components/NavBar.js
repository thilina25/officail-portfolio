import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; 
import React from 'react';

export const NavBar = () => {
    return (

    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className='custom-navbar'>
        <Container>
            <Navbar.Brand href="#profile" className="me-3" style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            TK98
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
                <Nav.Link href="#home" as={Button} variant="outline-light" className="me-2">
                Profile
                </Nav.Link>
                <Nav.Link href="#skills" as={Button} variant="outline-light" className="me-2">
                Skills
                </Nav.Link>
                <Nav.Link href="#projects" as={Button} variant="outline-light" className="me-2">
                Projects
                </Nav.Link>
                <Nav.Link href="#education" as={Button} variant="outline-light" className="me-2">
                Education
                </Nav.Link>
                <Nav.Link href="#certificates" as={Button} variant="outline-light" className="me-2">
                Certificate
                </Nav.Link>
                <Nav.Link href="#about" as={Button} variant="outline-light" className="me-2">
                About Me
                </Nav.Link>
                <Nav.Link href="#contact" as={Button} variant="outline-light" className="me-2">
                Contact Me
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}