import React from 'react';
import NavBarHome from '../components/navBar/NavBarHome';
import styles from '../styles/HomeView.module.css';
import Profile from '../images/philippe-pic.jpg';

const HomeView = () => {


    return (
        <main>
            <NavBarHome />
            <section>
                <img src={Profile} alt="My profile" className={styles.profilePic}></img>
                <section className={styles.bar}>
                    <h2 className={styles.myStoryH2}>About Me...</h2>
                </section>
            </section>
            <p className={styles.aboutMeText}>My first experience with coding was in 5th grade in computer class, where we learned to create simple HTML webpages. Since then, I've always had an appreciation of the technology and what it can do. Combined with my strong sense of design and color use. I have so much experience working with and helping others. I've had the opportunity to save lives as a 911 dispatcher, manage a theater, educate young children. I am transitioning into tech and want to bring my life/work experiences, continue to help others and design awesome front end applications. I have always enjoyed seeing the big picture, relentless pursuing understanding of all the moving pieces, then making it all come together.</p>

            <div className={styles.row}>
                <section className={styles.column}>
                    <p>test</p>
                </section>
                <section className={styles.column}>
                    <p>test</p>
                </section>
            </div>
        </main>




    )
}


export default HomeView;