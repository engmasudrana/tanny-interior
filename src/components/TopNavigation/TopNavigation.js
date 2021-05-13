import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './TopNavigation.css';

const TopNavigation = () => {
    return (
        <>
        <Container className="fixed-top navBackground border-bottom">
            <Navbar expand="lg">
                <Link to="/"><Navbar.Brand href="#home" className="logo-title">Tanny-Interior</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto"> </Nav>
                        <Nav>
                            <Link exact activeStyle={{color:'#28A745'}} className="navItem" to="/">Home</Link>
                            <Link  className="navItem" to="/noMatch">About</Link>
                            <Link  className="navItem" to="/service">Services</Link>
                            <Link  className="navItem" to="/admin">Dashboard</Link>
                            <Link  className="navItem" to="/reviews">Testimonial</Link>
                            <Link  className="navItem" to="/contact">Contact</Link>
                            <Link  className="navItem" to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
        </>
    );
};

export default TopNavigation;