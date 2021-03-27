import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const ProjectPopover = () => {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Portfolio Features:</Popover.Title>
            <Popover.Content>
                This webpage was created using the <strong>React</strong> framework, which includes extensive use of <strong>JavaScript, jQuery</strong> and some <strong>HTML/CSS</strong>.
                <br></br>
                <br></br>
                <strong>React Bootstrap</strong> was used to create many of the features, including the navbar, cards, and the accordian effects on the experience view.
            </Popover.Content>
            <Popover.Title as="h3"><a href="https://github.com/PhilippeStM/portfolio" target="_blank" rel="noreferrer">View on GitHub.</a></Popover.Title>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover}>
            <Button variant="success">Learn More!</Button>
        </OverlayTrigger>
    )
};

export default ProjectPopover;