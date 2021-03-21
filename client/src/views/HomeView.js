import React from 'react';
import NavBarHome from '../components/navBar/NavBarHome';
import styles from '../styles/HomeView.module.css';
import Profile from '../images/philippe-pic.jpg';

const HomeView = () => {


    return (

        <main>
        <NavBarHome />
            <section className={styles.blackBar}>
                <img src={Profile} alt="My profile" className={styles.profilePic}></img>
            </section>
        </main>

    )
}


export default HomeView;