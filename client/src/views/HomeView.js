import React from 'react';
import NavBar from '../components/navBar/NavBar';
import styles from '../styles/HomeView.module.css';
import Profile from '../images/philippe-pic.jpg';

const HomeView = () => {


    return (

        <main>
        <NavBar />
            <section className={styles.blackBar}>
                <img src={Profile} alt="My profile" className={styles.profilePic}></img>
            </section>
        </main>

    )
}


export default HomeView;