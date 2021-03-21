import React from 'react';
import styles from '../../styles/NavBar.module.css';
import Logo from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NavBarContact = () => {
    return (
        <main>
            <img src={Logo} alt="logo" className={styles.logo}></img>
            <Navbar collapseOnSelect expand="lg" className={styles.navBar} variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact" style={{color: "whitesmoke", fontStyle: "italic"}}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </main>
    )
}

export default NavBarContact;