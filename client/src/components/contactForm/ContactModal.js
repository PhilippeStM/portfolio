import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/ContactModal.module.css';
import ContactForm from '../contactForm/ContactForm';
import Nav from 'react-bootstrap/Nav';

const ContactModal = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Nav.Link  onClick={handleShow} className={styles.modalLink} >
                Contact Me
            </Nav.Link>

            <Modal
                dialogClassName={styles.modal}
                show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}


export default ContactModal;