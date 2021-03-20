import React from 'react';
import NavBar from '../components/navBar/NavBar';
import styles from '../styles/HomeView.module.css';

const HomeView = () => {




    return (

        <center className={styles.wrapper}>
            <NavBar />
            <h1>this is the home page view.</h1>
        </center>

    )
}


export default HomeView;