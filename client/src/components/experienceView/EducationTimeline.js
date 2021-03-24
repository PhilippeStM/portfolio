import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CodingDojoCertificateModal from './CodingDojoCertificateModal';
import styles from '../../styles/ExperienceView.module.css';

const EducationTimeline = () => {

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <span className={styles.title}>Coursework Completed</span>
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>1/2021 to 3/2021 TekSystems Bootcamp. 
                        <br></br>
                        Completed assignments related to Agile Methodologies, GitHub, Algorithms, HTML/CSS/JS, DOM, React, and a Capstone Project.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <span className={styles.title}>Web Development Certification</span>
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <div>
                        <Card.Body>8/2020 to 12/2020 - Coding Dojo
                            <br></br>
                            Full-Stack Web Development Certification in MERN and HTML/CSS/JS.</Card.Body>
                        <CodingDojoCertificateModal />
                    </div>

                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default EducationTimeline;