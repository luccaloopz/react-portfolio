import React from 'react';
import { Card } from 'react-bootstrap';

export default function Project(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
                <Card.Link href={props.githubLink} style={{color: 'black'}} target={'_blank'}>GitHub Repo</Card.Link>
                <Card.Link href={props.deployedLink} style={{color: 'black'}} target={'_blank'}>Deployed App</Card.Link>
            </Card.Body>
        </Card>
    )
};
