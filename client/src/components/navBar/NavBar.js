import React from 'react';
import styles from '../../styles/NavBar.module.css';
import Logo from '../../images/logo_fs.png';
import Navbar from 'react-bootstrap/Navbar';
import ContactModal from '../contactForm/ContactModal';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NavBarHome = () => {

    return (
        <main>
            <img src={Logo} alt="logo" className={styles.logo}></img>
            <Navbar collapseOnSelect expand="lg" className={styles.navBar} variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <ContactModal />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </main>
    )
}

export default NavBarHome;