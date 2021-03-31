import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className={styles.formContainer}>
            <Form action="https://mailthis.to/philippestm@yahoo.com" method="POST">
                <Form.Row as={Col}>
                    <Form.Group xs={6} as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" name="_replyto" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group xs={6} as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required name="name" placeholder="Enter Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control required type="text" name="message" placeholder="How can I help you today?" />
                </Form.Group>
                <Form.Group xs={4} as={Col} controlId="formGridPhone">
                    <Form.Label>Phone Number (optional)</Form.Label>
                    <Form.Control type="tel" name="message" placeholder="555-555-5555" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Button className={styles.button} variant="primary" type="submit">Submit</Button>

                </Form.Group>

            </Form>

        </div>

    )
}

export default ContactForm;