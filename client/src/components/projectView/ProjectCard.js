import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/ProjectCard.module.css';

const ProjectCard = (props) => {
    return (
        <Card
        id={props.id}
        style={{ width: '18rem' }}
        imgSrc={props.imgSrc}
        title={props.title}
        text={props.text}
        techUsed={props.techUsed}
        buttonText={props.buttonText}
        href={props.href}        
        >
            <Card.Img variant="top" src={props.imgSrc} className={styles.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Card.Text><u>Technologies Used:</u></Card.Text>
                <Card.Text><b>{props.techUsed}</b></Card.Text>
                <Button variant="primary" href={props.href} target="_blank" rel="noreferrer">{props.buttonText}</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;