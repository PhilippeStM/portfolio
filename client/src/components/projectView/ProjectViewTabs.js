import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from '../projectView/ProjectCard';
import ClothingEmporiumPicture from '../../images/clothing-emporium.png';
import SushiMePicture from '../../images/sushime.png';
import NewsPicture from '../../images/news-project.png';
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
                            title="Clothing Emporium (Front-End)"
                            text="Capstone Project for TekSystems Bootcamp. Created with React framework, implemented useContext to save state on the cart."
                            techUsed="React, React Bootstrap, JavaScript, jQuery, HTML, CSS."
                            buttonText="View Project Page"
                            href="http://flashy-kite.surge.sh/"
                            gitHref="https://github.com/PhilippeStM/tek-camp-capstone-1"
                        />
                        <ProjectCard
                            id="featured"
                            imgSrc={SushiMePicture}
                            title="SushiMe! (Both Front and Back-End)"
                            text="Final Solo Project for Coding Dojo. Online restaurant website with ordering functionality."
                            techUsed="React, Express, Node.js, MondoDB, Axios, JavaScript, jQuery, HTML, CSS."
                            buttonText="View Project Video"
                            href="https://www.youtube.com/watch?v=kih2YiqUqww"
                            gitHref="https://github.com/PhilippeStM/Solo-Project"
                        />
                        <ProjectCard
                            id="featured"
                            imgSrc={NewsPicture}
                            title="Tek News (Front-End)"
                            text="API project from TekSystems Bootcamp that involved working with the news.api."
                            techUsed="React, Axios, API's."
                            buttonText="View Project Video"
                            href="https://www.youtube.com/watch?v=0ceVXWscR7E"
                            gitHref="https://github.com/PhilippeStM/tek-systems-react-exercise/tree/master/news"
                        />
                    </CardDeck>
                </Tab>
                <Tab eventKey="coding-bootcamps" title="Coding Bootcamps">
                    <p>hi</p>
                </Tab>
                <Tab eventKey="personal-projects" title="Personal Projects">
                    <p>test</p>
                </Tab>
            </Tabs>

        </div>
    )

}

export default ProjectViewTabs;