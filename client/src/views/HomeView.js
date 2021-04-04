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
                    <h2 className={styles.myStoryH2}>Developer / Problem Solver / Skilled in Customer Service</h2>

                </section>
            </section>                    
            {/* <img src={Profile} alt="My profile" className={styles.profilePic2}></img> */}
            <h2 className={styles.intro}>Hello, my name is Philippe! I develop websites and web applications specializing in JavaScript and the React framework. </h2>
            <p className={styles.aboutMeText}>
                An challenge is not something to shy away from, but an opportunity for growth, and I really enjoy finding creative ways to overcome them. That's why I became a devloper - there is always something new to learn about oneself and technology. I have many years experience learning operations at all levels, from bottom to top. It is a joy for me to see how all of the moving pieces work together and interact with each other. These are just some of the reasons I enjoy development, and I look forward to bringing your applications to life!
                </p>

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