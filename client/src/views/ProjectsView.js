import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjectCard from '../components/projectView/ProjectCard';
import TestLogo from '../images/css-logo.png';
import styles from '../styles/ProjectsView.module.css';
import ProjectPopover from '../components/projectView/ProjectPopover';

const ProjectsView = () => {

    return (

        <div>
            <Jumbotron className={styles.jumbotron}>
                <h1>My portfolio page.</h1>
                <p>To see what technologies were used in the creation of this webpage, and for a link to the GitHub repository, click below.</p>
                <ProjectPopover />
            </Jumbotron>
            <section>
                <CardDeck className={styles.cardDeckContainer}>
                    <ProjectCard
                        id="bootcamp"
                        imgSrc={TestLogo}
                        title="test title"
                        text="test text"
                        buttonText="test button"
                    />
                    <ProjectCard
                        id="bootcamp"
                        imgSrc={TestLogo}
                        title="test title"
                        text="test text"
                        buttonText="test button"
                    />
                    <ProjectCard
                        id="bootcamp"
                        imgSrc={TestLogo}
                        title="test title"
                        text="test text"
                        buttonText="test button"
                    />
                </CardDeck>

            </section>

        </div>


    )
}


export default ProjectsView;