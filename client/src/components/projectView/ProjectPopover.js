import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const ProjectPopover = () => {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
        right?
    </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover}>
            <Button variant="success">Learn More!</Button>
        </OverlayTrigger>
    )
};

export default ProjectPopover;