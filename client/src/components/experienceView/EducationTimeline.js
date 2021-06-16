import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CodingDojoCertificateModal from './CodingDojoCertificateModal';
import styles from '../../styles/ExperienceView.module.css';

const EducationTimeline = () => {

    // This is the function and state for CURRENT LEARNING

    const [newColorCurrentLearning, setNewColorCurrentLearning] = useState("");
    const [activeCurrentLearning, setActiveCurrentLearning] = useState(false);

    const changeColorCurrentLearning = () => {

        setNewColorTek("#71909033");
        setActiveTek(false);

        setNewColorCodingDojo("rgba(148, 137, 247, 0.24");
        setActiveCodingDojo(false);

        setNewColorBachelors("#71909033");
        setActiveBachelors(false);

        if (activeCurrentLearning === true && newColorCurrentLearning === "rgba(148, 137, 247, 0.24") {
            setNewColorCurrentLearning("rgba(148, 137, 247, 0.24");
            setActiveCurrentLearning(false);
        }
        else {
            setActiveCurrentLearning(true);
            setNewColorCurrentLearning("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************  

    // This is the function and state for TEK SYSTEMS

    const [newColorTek, setNewColorTek] = useState("");
    const [activeTek, setActiveTek] = useState(false);

    const changeColorTek = () => {

        setNewColorCurrentLearning("rgba(148, 137, 247, 0.24");
        setActiveCurrentLearning(false);

        setNewColorCodingDojo("rgba(148, 137, 247, 0.24");
        setActiveCodingDojo(false);

        setNewColorBachelors("#71909033");
        setActiveBachelors(false);

        if (activeTek === true && newColorTek === "#71909033") {
            setNewColorTek("#71909033");
            setActiveTek(false);
        }
        else {
            setActiveTek(true);
            setNewColorTek("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************  

    // This is the function and state for CODING DOJO

    const [newColorCodingDojo, setNewColorCodingDojo] = useState("rgba(241, 172, 93, 0.705)");
    const [activeCodingDojo, setActiveCodingDojo] = useState(false);

    const changeColorCodingDojo = () => {

        setNewColorCurrentLearning("rgba(148, 137, 247, 0.24");
        setActiveCurrentLearning(false);

        setNewColorTek("#71909033");
        setActiveTek(false);

        setNewColorBachelors("#71909033");
        setActiveBachelors(false);

        if (activeCodingDojo === true && newColorCodingDojo === "rgba(148, 137, 247, 0.24") {
            setNewColorCodingDojo("rgba(148, 137, 247, 0.24");
            setActiveCodingDojo(false);
        }
        else {
            setActiveCodingDojo(true);
            setNewColorCodingDojo("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************  

    // This is the function and state for BACHELORS DEGREE

    const [newColorBachelors, setNewColorBachelors] = useState("");
    const [activeBachelors, setActiveBachelors] = useState(false);

    const changeColorBachelors = () => {

        setNewColorCurrentLearning("rgba(148, 137, 247, 0.24");
        setActiveCurrentLearning(false);

        setNewColorTek("#71909033");
        setActiveTek(false);

        setNewColorCodingDojo("rgba(148, 137, 247, 0.24");
        setActiveCodingDojo(false);

        if (activeBachelors === true && newColorBachelors === "#71909033") {
            setNewColorBachelors("#71909033");
            setActiveBachelors(false);
        }
        else {
            setActiveBachelors(true);
            setNewColorBachelors("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************  

    return (
        <Accordion className={styles.container} defaultActiveKey="0">
            <Card
                className={styles.accordianCardPurple}
                onClick={changeColorCurrentLearning}
                style={{ backgroundColor: newColorCurrentLearning }}
            >
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <span className={styles.title}>Currently Studying</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body><span className={styles.companyName}>3/2021 to Present</span>
                        <br></br>
                        <br></br>
                        <span className={styles.jobDescription}>Continuing to learn more about React and work on projects related to front end web development. Developing portfolio page.</span></Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className={styles.accordianCardGreen}
                onClick={changeColorTek}
                style={{ backgroundColor: newColorTek }}
            >
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <span className={styles.title}>Coursework Completed</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><span className={styles.companyName}>1/2021 to 3/2021 TekSystems Fullstack Course.</span>
                        <br></br>
                        <br></br>
                        <span className={styles.jobDescription}>Completed assignments related to Agile Methodologies, GitHub, Algorithms, HTML/CSS/JS, DOM, React, and a Capstone Project.</span></Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className={styles.accordianCardPurple}
                onClick={changeColorCodingDojo}
                style={{ backgroundColor: newColorCodingDojo }}
            >
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <span className={styles.title}>Web Development Certification</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div>
                        <Card.Body><span className={styles.companyName}>8/2020 to 12/2020 - Coding Dojo</span>
                            <br></br>
                            <br></br>
                            <span className={styles.jobDescription}>Full-Stack Web Development Certification in MERN and HTML/CSS/JS.</span></Card.Body>
                        <CodingDojoCertificateModal />
                    </div>
                </Accordion.Collapse>
            </Card>

            <Card className={styles.accordianCardGreen}
                onClick={changeColorBachelors}
                style={{ backgroundColor: newColorBachelors }}
            >
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    <span className={styles.title}>Bachelor's Degree</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body><span className={styles.companyName}>9/2008 to 5/2012 - California Baptist University</span>
                        <br></br>
                        <br></br>
                        <span className={styles.jobDescription}>Bachelor's of Applied Theology</span></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default EducationTimeline;