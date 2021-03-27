import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styles from '../styles/ProjectsView.module.css';
import ProjectPopover from '../components/projectView/ProjectPopover';
import ProjectViewTabs from '../components/projectView/ProjectViewTabs';

const ProjectsView = () => {

    return (

        <div>
            <Jumbotron className={styles.jumbotron}>
                <h1>My portfolio page.</h1>
                <p>To see what technologies were used in the creation of this webpage, and for a link to the GitHub repository, click below.</p>
                <ProjectPopover />
            </Jumbotron>
            <section>
                <h2>Check out some of my projects below!</h2>
                <ProjectViewTabs />
            </section>

        </div>


    )
}


export default ProjectsView;