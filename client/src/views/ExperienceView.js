import React from 'react';
import styles from '../styles/ExperienceView.module.css';
import ExperienceTimeline from '../components/experienceView/ExperienceTimeline';
import EducationTimeline from '../components/experienceView/EducationTimeline';

const ExperienceView = () => {

    return (
        <section>
            <p>maybe visually represent these bars w/ the dates laid out and bar sizes based on length of employment. Even make the exp/edu rows horizontal maybe.</p>
            <div className={styles.row}>
                <section className={styles.experienceColumn}>
                    <h2>Work Experience</h2>
                    <ExperienceTimeline />
                </section>

                <section className={styles.educationColumn}>
                    <h2>Education</h2>
                    <EducationTimeline />
                </section>
            </div>
        </section>

    )
}


export default ExperienceView;