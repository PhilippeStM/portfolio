import React from 'react';
import styles from '../../styles/NavBar.module.css';
import Logo from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <main>
            
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <img src={Logo} alt="logo" className={styles.logo}></img>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </main>
    )
}

export default NavBar;