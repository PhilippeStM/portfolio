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
                    <h2 className={styles.myStoryH2}>Web Developer / Problem Solver / Communications Expert</h2>

                </section>
            </section>                    

            <h2 className={styles.intro}>Hi, I'm Philippe! I create websites and web applications specializing in JavaScript and React. I use my experience helping people to serve my client's needs and to work well with others.</h2>            
            
            <img src={Profile} alt="My profile" className={styles.profilePic2}></img>
            <p className={styles.aboutMeText}>
            A challenge is an opportunity for growth, and I enjoy finding creative ways to overcome them. Development allows me to have those opportunities, as there is always something new to learn about myself. I am always trying to improve my technical skills and I look forward to seeing what we can accomplish together!
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