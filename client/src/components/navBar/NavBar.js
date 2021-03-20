import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import styles from '../../styles/NavBar.module.css';

const NavBar = () => {

const [linkColor, setLinkColor] = useState("");

const linkColorChange = (e) => {
    setLinkColor("red");
    return (linkColor);
}

console.log("link color " + linkColor);
console.log(styles.link);

    return (
        <main className={styles.wrapper}>
            <img src={Logo} className={styles.logo} alt="logo"></img>
            <section className={styles.linkWrapper}>
                <Link to="/" className={styles.link} onClick={linkColorChange} style={{color:`${linkColor}`}}>Home</Link>
                <Link to="/projects" className={styles.link} onClick={linkColorChange} style={{color:`${linkColor}`}}>Projects</Link>
                <Link to="/experience" className={styles.link}>Experience</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
            </section>
        </main>

    )
}

export default NavBar;