import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ContactView from '../views/ContactView';
import ExperienceView from '../views/ExperienceView';
import HomeView from '../views/HomeView';
import ProjectsView from '../views/ProjectsView';

const PortfolioApp = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/contact" component={ContactView} />
                <Route exact path="/experience" component={ExperienceView} />
                <Route exact path="/projects" component={ProjectsView} />
            </div>
        </Router>
    )
}

export default PortfolioApp;