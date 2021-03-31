import React from 'react';
import SkillsLogos from '../components/homeView/SkillsLogos';
import styles from '../styles/HomeView.module.css';
import Profile from '../images/philippe-pic.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron'

const HomeView = () => {


    return (
        <main> 
            <section>
                {/* <img src={Profile} alt="My profile" className={styles.profilePic}></img> */}
                <section className={styles.bar}>
                    <h2 className={styles.myStoryH2}>Hello, I'm, a creative problem solver with a background helping others.</h2>

                </section>
            </section>                    
            {/* <img src={Profile} alt="My profile" className={styles.profilePic2}></img> */}
            <h2 className={styles.intro}>I design clean, usable code with specialty in React framework. </h2>
            <p className={styles.aboutMeText}>My first experience with coding was in 5th grade in computer class, where we learned to create simple HTML webpages. Since then, I've always had an appreciation of the technology and what it can do. Combined with my strong sense of design and color use. I have so much experience working with and helping others. I've had the opportunity to save lives as a 911 dispatcher, manage a theater, educate young children. I am transitioning into tech and want to bring my life/work experiences, continue to help others and design awesome front end applications. I have always enjoyed seeing the big picture, relentless pursuing understanding of all the moving pieces, then making it all come together.</p>

            <div className={styles.row}>
                <section className={styles.column}>
                    <Jumbotron fluid className={styles.jumbotron}>
                        <h3>Expertise In:</h3>
                        <SkillsLogos />
                    </Jumbotron>
                </section>
                <section className={styles.column}>
                <Jumbotron fluid className={styles.jumbotron}>
                        <h3>Looking For Roles As:</h3>
                        <br></br>
                        <p className={styles.lookingForP}>Web Developer</p>
                        <p className={styles.lookingForP}>Software Engineer</p>
                        <p className={styles.lookingForP}>*Open to remote roles or relocation*</p>
                    </Jumbotron>
                </section>
            </div>
        </main>
    )
}

export default HomeView;