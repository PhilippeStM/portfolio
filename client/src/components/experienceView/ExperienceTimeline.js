import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/ExperienceView.module.css';

const ExperienceTimeline = () => {

    // This is the function and state for CUSTOMER SERVICE

    const [newColorCustomerService, setNewColorCustomerService] = useState("rgba(241, 172, 93, 0.705)");
    const [activeCustomerService, setActiveCustomerService] = useState(false);

    const changeColorCustomerService = () => {

        setNewColorDispatcher("#71909033");
        setActiveDispatcher(false);
        setNewColorPSO("rgba(148, 137, 247, 0.24)");
        setActivePSO(false);
        setNewColorManager("#71909033");
        setActiveManager(false);
        setNewColorChess("rgba(148, 137, 247, 0.24");
        setActiveChess(false);
        setNewColorMultiple("#71909033");
        setActiveMultiple(false);

        if (activeCustomerService === true && newColorCustomerService === "rgba(148, 137, 247, 0.24") {
            setNewColorCustomerService("rgba(148, 137, 247, 0.24");
            setActiveCustomerService(false);
        }
        else {
            setActiveCustomerService(true);
            setNewColorCustomerService("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************

    // This is the function and state for DISPATCHER

    const [newColorDispatcher, setNewColorDispatcher] = useState("");
    const [activeDispatcher, setActiveDispatcher] = useState(false);

    const changeColorDispatcher = () => {

        setNewColorCustomerService("rgba(148, 137, 247, 0.24");
        setActiveCustomerService(false);
        setNewColorPSO("rgba(148, 137, 247, 0.24)");
        setActivePSO(false);
        setNewColorManager("#71909033");
        setActiveManager(false);
        setNewColorChess("rgba(148, 137, 247, 0.24");
        setActiveChess(false);
        setNewColorMultiple("#71909033");
        setActiveMultiple(false);

        if (activeDispatcher === true && newColorDispatcher === "#71909033") {
            setNewColorDispatcher("#71909033");
            setActiveDispatcher(false);
        }
        else {
            setActiveDispatcher(true);
            setNewColorDispatcher("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************

    // This is the function and state for PSO

    const [newColorPSO, setNewColorPSO] = useState("");
    const [activePSO, setActivePSO] = useState(false);

    const changeColorPSO = () => {

        setNewColorCustomerService("rgba(148, 137, 247, 0.24");
        setActiveCustomerService(false);
        setNewColorDispatcher("#71909033");
        setActiveDispatcher(false);
        setNewColorManager("#71909033");
        setActiveManager(false);
        setNewColorChess("rgba(148, 137, 247, 0.24");
        setActiveChess(false);
        setNewColorMultiple("#71909033");
        setActiveMultiple(false);

        if (activePSO === true && newColorPSO === "rgba(148, 137, 247, 0.24") {
            setNewColorPSO("rgba(148, 137, 247, 0.24)");
            setActivePSO(false);
        }
        else {
            setActivePSO(true);
            setNewColorPSO("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************

    // This is the function and state for MANAGER

    const [newColorManager, setNewColorManager] = useState("");
    const [activeManager, setActiveManager] = useState(false);

    const changeColorManager = () => {

        setNewColorCustomerService("rgba(148, 137, 247, 0.24");
        setActiveCustomerService(false);
        setNewColorDispatcher("#71909033");
        setActiveDispatcher(false);
        setNewColorPSO("rgba(148, 137, 247, 0.24");
        setActivePSO(false);
        setNewColorChess("rgba(148, 137, 247, 0.24");
        setActiveChess(false);
        setNewColorMultiple("#71909033");
        setActiveMultiple(false);

        if (activeManager === true && newColorManager === "#71909033") {
            setNewColorManager("#71909033");
            setActiveManager(false);
        }
        else {
            setActiveManager(true);
            setNewColorManager("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************

    // This is the function and state for CHESS

    const [newColorChess, setNewColorChess] = useState("");
    const [activeChess, setActiveChess] = useState(false);

    const changeColorChess = () => {

        setNewColorCustomerService("rgba(148, 137, 247, 0.24");
        setActiveCustomerService(false);
        setNewColorDispatcher("#71909033");
        setActiveDispatcher(false);
        setNewColorPSO("rgba(148, 137, 247, 0.24");
        setActivePSO(false);
        setNewColorManager("#71909033");
        setActiveManager(false);
        setNewColorMultiple("#71909033");
        setActiveMultiple(false);

        if (activeChess === true && newColorChess === "rgba(148, 137, 247, 0.24") {
            setNewColorChess("rgba(148, 137, 247, 0.24");
            setActiveChess(false);
        }
        else {
            setActiveChess(true);
            setNewColorChess("rgba(241, 172, 93, 0.705)");
        }
    }

    // **************************************************************  

    // This is the function and state for MULTIPLE POSITIONS

    const [newColorMultiple, setNewColorMultiple] = useState("");
    const [activeMultiple, setActiveMultiple] = useState(false);

    const changeColorMultiple = () => {
        setNewColorCustomerService("rgba(148, 137, 247, 0.24");
        setActiveCustomerService(false);
        setNewColorDispatcher("#71909033");
        setActiveDispatcher(false);
        setNewColorPSO("rgba(148, 137, 247, 0.24");
        setActivePSO(false);
        setNewColorManager("#71909033");
        setActiveManager(false);
        setNewColorChess("rgba(148, 137, 247, 0.24");
        setActiveChess(false);

        if (activeMultiple === true && newColorMultiple === "#71909033") {
            setNewColorMultiple("#71909033");
            setActiveMultiple(false);
        }
        else {
            setActiveMultiple(true);
            setNewColorMultiple(("rgba(241, 172, 93, 0.705)"));
        }
    }

    // **************************************************************  

    return (
        <div>
            <Accordion className={styles.container} defaultActiveKey="0">

                <Card className={styles.accordianCardPurple}
                    onClick={changeColorCustomerService}
                    style={{ backgroundColor: newColorCustomerService }}
                >
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <span className={styles.title}>Customer Service Representative</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><span className={styles.companyName}>10/2020 to Present - Clean Energy Fuels.</span>
                            <br></br>
                            <br></br>
                            <span className={styles.jobDescription}>Respond to phone calls from the public and those who need assistance at natural gas stations throughout the country. Use SCADA monitoring technology to diagnose and resolve problems at gas sites. Troubleshoot issues over the phone or dispatch technicians to service sites as needed.</span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={styles.accordianCardGreen}
                    onClick={changeColorDispatcher}
                    style={{ backgroundColor: newColorDispatcher }}
                >
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <span className={styles.title}>Police Dispatcher</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body><span className={styles.companyName}>4/2019 to 7/2020 - Orange Police Department</span>
                            <br></br>
                            <br></br>
                            <span className={styles.jobDescription}>Respond to 911 and non emergency phone calls. Use police communication technology and radio systems to dispatch and communicate with field units. Use multiple software applications to perform duties and document incidents as they unfold.</span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={styles.accordianCardPurple}
                    onClick={changeColorPSO}
                    style={{ backgroundColor: newColorPSO }}
                >
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <span className={styles.title}>Police Services Officer</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body><span className={styles.companyName}>11/2017 to 4/2019 - Orange Police Department</span>
                            <br></br>
                            <br></br>
                            <span className={styles.jobDescription}>Respond to non emergency calls for service and open investigations as needed. Write police reports for non violent crimes and conduct CSI when appropriate. Use police radio to communicate in the field. Respond to citizen requests at the front desk.</span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={styles.accordianCardGreen}
                    onClick={changeColorManager}
                    style={{ backgroundColor: newColorManager }}
                >
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        <span className={styles.title}>Assistant Manager</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body><span className={styles.companyName}>5/2015 to 11/2017 - Cinemark</span>
                            <br></br>
                            <br></br>
                            <span className={styles.jobDescription}>Assist General Manager in theater operations. Develop and train staff members. Ensure all applicable laws, ordinances and policies are followed. Resolve guest and employee conflicts/concerns.</span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={styles.accordianCardPurple}
                    onClick={changeColorChess}
                    style={{ backgroundColor: newColorChess }}
                >
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        <span className={styles.title}>Chess Instructor</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body><span className={styles.companyName}>10/2012 to 6/2017 - Strategic Kids</span>
                            <br></br>
                            <br></br>
                            <span className={styles.jobDescription}>Provide engaging chess lessons to children enrolled in after-school programs.</span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={styles.accordianCardGreen}
                    onClick={changeColorMultiple}
                    style={{ backgroundColor: newColorMultiple }}
                >
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        <span className={styles.title}>Multiple Positions (Cinemark)</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body><span className={styles.companyName}>5/2005 to 5/2013 - Cinemark</span>
                            <br></br>
                            <br></br>
                            <span className={styles.jobDescription}>Positions included: Shift Leader, Projectionist (both 35mm and digital), Concessionist, Usher, Theater Checker.</span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    )
}

export default ExperienceTimeline;