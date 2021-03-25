import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CodingDojoCertificateModal from './CodingDojoCertificateModal';
import styles from '../../styles/ExperienceView.module.css';

const EducationTimeline = () => {

    return (
        <Accordion className={styles.container}
            defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <span className={styles.title}>Currently Studying</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>3/2021 to Present
                        <br></br>
                        Continuing to learn more about React and work on projects related to front end web development.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <span className={styles.title}>Coursework Completed</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>1/2021 to 3/2021 TekSystems Bootcamp.
                        <br></br>
                        Completed assignments related to Agile Methodologies, GitHub, Algorithms, HTML/CSS/JS, DOM, React, and a Capstone Project.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <span className={styles.title}>Web Development Certification</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div>
                        <Card.Body>8/2020 to 12/2020 - Coding Dojo
                            <br></br>
                            Full-Stack Web Development Certification in MERN and HTML/CSS/JS.</Card.Body>
                        <CodingDojoCertificateModal />
                    </div>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    <span className={styles.title}>Bachelor's Degree</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>9/2008 to 5/2012 - California Baptist University
                        <br></br>
                        Bachelor's of Applied Theology</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default EducationTimeline;