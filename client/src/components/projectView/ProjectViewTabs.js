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
            <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example" className={styles.tabLinkContainer}>
                <Tab eventKey="home" title="Featured">
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
                <Tab eventKey="coding-dojo" title="Coding Dojo">
                    <p>hi</p>
                </Tab>
                <Tab eventKey="tek-systems" title="Tek Systems">
                    <p>test</p>
                </Tab>
            </Tabs>

        </div>
    )

}

export default ProjectViewTabs;