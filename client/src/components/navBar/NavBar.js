import React from 'react';
import Logo from '../../images/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styles from '../../styles/NavBar.module.css';

const NavBar = () => {



    return (
        <section className={styles.wrapper}>
            <img src={Logo} className={styles.logo}></img>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/projects" className={styles.link}>Projects</Link>
            <Link to="/experience" className={styles.link}>Experience</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
        </section>

    )
}

export default NavBar;