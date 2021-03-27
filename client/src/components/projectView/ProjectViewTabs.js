import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from '../projectView/ProjectCard';
import TestLogo from '../../images/css-logo.png';
import ClothingEmporiumPicture from '../../images/clothing-emporium.png';
import styles from '../../styles/ProjectsView.module.css';

const ProjectViewTabs = () => {

    return (
        <div className={styles.tabContainer}>
            <Tabs fill justify defaultActiveKey="home" id="uncontrolled-tab-example" className={styles.tabLinkContainer}>
                <Tab eventKey="home" title="Featured">
                    <CardDeck className={styles.cardDeckContainer}>
                        <ProjectCard
                            id="featured"
                            imgSrc={ClothingEmporiumPicture}
                            title="Clothing Emporium"
                            text="Capstone Project for TekSystems Bootcamp. Created with React framework, implemented useContext to save state on the cart."
                            techUsed="React, React Bootstrap, JavaScript, jQuery, HTML, CSS."
                            buttonText="View Project"
                            href="http://flashy-kite.surge.sh/"
                        />
                        <ProjectCard
                            id="bootcamp"
                            imgSrc={TestLogo}
                            title="test title"
                            text="test text"
                            buttonText="test button"
                            href="test"
                        />
                        <ProjectCard
                            id="bootcamp"
                            imgSrc={TestLogo}
                            title="test title"
                            text="test text"
                            buttonText="test button"
                            href="test"
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