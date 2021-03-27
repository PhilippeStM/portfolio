import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjectCard from '../components/projectView/ProjectCard';
import TestLogo from '../images/css-logo.png';
import styles from '../styles/ProjectsView.module.css';

const ProjectsView = () => {

    return (

        <div>
            <Jumbotron>
                <h1>My portfolio page.</h1>
                <p>Learn more about what was used to create this webpage!</p>
                <p><Button variant="primary">Learn more</Button></p>
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