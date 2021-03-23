import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DojoCert from '../../images/dojo-cert.png';
import styles from '../../styles/CodingDojoCertificateModal.module.css';

const CodingDojoCertificateModal = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
        </Button>

            <Modal
                dialogClassName={styles.modal}
                show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Certificate</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={DojoCert} alt="certificate"></img></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}


export default CodingDojoCertificateModal;