import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/ExperienceView.module.css';

const ExperienceTimeline = () => {
    return (
        <div>
            <Accordion className={styles.container} defaultActiveKey="0">
                <Card className={styles.accordianCardPurple}>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        
                    <span className={styles.title}>Customer Service Representative</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>10/2020 to Present - Clean Energy Fuels.
                            <br></br>
                            Respond to phone calls from the general public and those who need assistance at natural gas stations throughout the country. Use of SCADA technology to monitor and rectify issues and gas sites. Dispatch technicians to service sites as needed.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={styles.accordianCardGreen}>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        
                    <span className={styles.title}>Police Dispatcher</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>4/2019 to 7/2020 - Orange Police Department
                            <br></br>
                            Respond to 911 and non emergency phone calls. Use police communication technology and radio systems to dispatch and communicate with field units. Use multiple software applications and screens to perform job duties and document incidents as they unfold.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={styles.accordianCardPurple}>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        
                    <span className={styles.title}>Police Services Officer</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>11/2017 to 4/2019 - Orange Police Department
                            <br></br>
                            Respond to non emergency calls for service and open investigations as needed. Write police reports for non violent crimes and conduct CSI when appropriate. Use police radio to communicate in the field. Respond to citizen requests at the front desk.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={styles.accordianCardGreen}>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        
                    <span className={styles.title}>Assistant Manager</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>5/2015 to 11/2017 - Cinemark
                            <br></br>
                            Assist General Manager in theater operations. Develop and train staff members. Ensure all applicable laws, ordinances and policies are followed. Resolve guest and employee conflicts/concerns.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={styles.accordianCardPurple}>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        
                    <span className={styles.title}>Multiple Positions (Cinemark)</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>5/2005 to 5/2013 - Cinemark
                            <br></br>
                            Positions included: Shift Leader, Projectionist (both 35mm and digital), Concessionist, Usher, Theater Checker.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={styles.accordianCardGreen}>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        
                    <span className={styles.title}>Chess Instructor</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>10/2012 to 6/2017 - Strategic Kids
                            <br></br>
                            Provide engaging chess lessons to children enrolled in after-school programs.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default ExperienceTimeline;