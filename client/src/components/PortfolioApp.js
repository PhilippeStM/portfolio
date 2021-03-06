import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import ExperienceView from '../views/ExperienceView';
import HomeView from '../views/HomeView';
import ProjectsView from '../views/ProjectsView';
import NavBar from '../components/navBar/NavBar';

const PortfolioApp = () => {
    return (
        <Router>
            <center>
                <NavBar/>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/experience" component={ExperienceView} />
                <Route exact path="/projects" component={ProjectsView} />
            </center>
        </Router>
    )
}

export default PortfolioApp;