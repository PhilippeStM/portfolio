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
                        Customer Service Representative
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
                        Dispatcher
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>4/2019 to 7/2020 - Orange Police Department
                            <br></br>
                            Respond to 911 and non emergency phone calls. Use police communication technology and radio systems to dispatch and communicate with field units. Use multiple software applications and screens to perform job duties and document incidents as they unfold.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default ExperienceTimeline;