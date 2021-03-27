import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = (props) => {
    return (
        <Card
        id={props.id}
        style={{ width: '18rem' }}
        imgSrc={props.imgSrc}
        title={props.title}
        text={props.text}
        buttonText={props.buttonText}        
        >
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="primary">{props.buttonText}</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;