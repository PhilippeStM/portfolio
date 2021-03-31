import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from '../projectView/ProjectCard';
import ProjectCardNoGithub from './ProjectCardNoGithub';
import ClothingEmporiumPicture from '../../images/clothing-emporium.png';
import SushiMePicture from '../../images/sushime.png';
import NewsPicture from '../../images/news-project.png';
import JayneDoePicture from '../../images/jayne-doe-portfolio.png';
import PetShelterPicture from '../../images/pet-shelter.png';
import TodoPic from '../../images/todo-list.png';
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
                            stack="(Front-End)"
                            text="Created with React framework, implemented useContext to save state on the cart."
                            techUsed="React, React Bootstrap, JavaScript, jQuery, HTML, CSS."
                            buttonText="View Project Page"
                            href="http://flashy-kite.surge.sh/"
                            gitHref="https://github.com/PhilippeStM/tek-camp-capstone-1"
                        />
                        <ProjectCard
                            id="featured"
                            imgSrc={SushiMePicture}
                            title="SushiMe!"
                            stack="(Front/Back-End)"
                            text="Final Solo Project for Coding Dojo. Online restaurant website with ordering functionality."
                            techUsed="React, Express, Node.js, MondoDB, Axios, JavaScript, jQuery, HTML, CSS."
                            buttonText="View Project Video"
                            href="https://www.youtube.com/watch?v=kih2YiqUqww&list=PLT9DgXf5etpIzazodYEFp5BEpp7GKEWia&index=1"
                            gitHref="https://github.com/PhilippeStM/Solo-Project"
                        />
                        <ProjectCard
                            id="featured"
                            imgSrc={NewsPicture}
                            title="Tek News"
                            stack="(Front-End)"
                            text="API project from TekSystems Course that involved working with the news.api."
                            techUsed="React, Axios, API's."
                            buttonText="View Project Video"
                            href="https://www.youtube.com/watch?v=0ceVXWscR7E&list=PLT9DgXf5etpIzazodYEFp5BEpp7GKEWia&index=2"
                            gitHref="https://github.com/PhilippeStM/tek-systems-react-exercise/tree/master/news"
                        />
                    </CardDeck>
                </Tab>
                <Tab eventKey="coding-bootcamps" title="Class Projects">
                    <CardDeck className={styles.cardDeckContainer}>
                        <ProjectCardNoGithub
                            id="coding-bootcamps"
                            imgSrc={JayneDoePicture}
                            title="Portfolio Page Project"
                            stack="(Front-End)"
                            text="Coding Dojo exercise in using HTML/CSS. Created a modern profile page template and deployed with surge."
                            techUsed="HTML/CSS."
                            buttonText="View Project Page"
                            href="http://cagey-crack.surge.sh/"
                        />
                        <ProjectCardNoGithub
                            id="coding-bootcamps"
                            imgSrc={PetShelterPicture}
                            title="Pet Shelter"
                            stack="(Front/Back-End)"
                            text="Created a pet shelter management system so users can add, edit or adopt pets from the shelter list."
                            techUsed="React, Express, Node.js, MondoDB, Axios, JavaScript, jQuery, HTML, CSS."
                            buttonText="View Project Video"
                            href="https://www.youtube.com/watch?v=bnCRglLpdvQ&list=PLT9DgXf5etpIzazodYEFp5BEpp7GKEWia&index=3"
                        />
                        <ProjectCard
                            id="coding-bootcamps"
                            imgSrc={TodoPic}
                            title="Todo List"
                            stack="(Front-End)"
                            text="Created a todo list for users to add new tasks, delete individual tasks, delete all tasks or mark a task as completed."
                            techUsed="React, JavaScript, jQuery, HTML, CSS."
                            buttonText="View Project Page"
                            href="http://capricious-noise.surge.sh/"
                            gitHref="https://github.com/PhilippeStM/tek-systems-react-exercise/tree/master/todo"
                        />

                    </CardDeck>

                </Tab>
                {/* <Tab eventKey="personal-projects" title="Personal Projects">
                    <p>test</p>
                </Tab> */}
            </Tabs>

        </div>
    )

}

export default ProjectViewTabs;