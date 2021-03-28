import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className={styles.formContainer}>
            <Form >
                <Form.Row as={Col}>
                    <Form.Group xs={6} as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group xs={6} as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required placeholder="John Doe" />
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control required type="text" placeholder="How can I help you today?" />
                </Form.Group>
                <Form.Group xs={4} as={Col} controlId="formGridPhone">
                    <Form.Label>Phone Number (optional)</Form.Label>
                    <Form.Control type="tel" placeholder="555-555-5555" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>

                </Form.Group>

            </Form>

        </div>

    )
}

export default ContactForm;