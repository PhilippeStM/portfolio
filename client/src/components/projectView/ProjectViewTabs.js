import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from '../projectView/ProjectCard';
import TestLogo from '../../images/css-logo.png';
import styles from '../../styles/ProjectsView.module.css';

const ProjectViewTabs = () => {

    return (
        <div className={styles.tabContainer}>
            <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
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
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>hi</p>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <p>test</p>
                </Tab>
            </Tabs>

        </div>
    )

}

export default ProjectViewTabs;