import React from 'react';
import { Card } from 'react-bootstrap';

export default function Project(props) {
    return (
        <Card style={{height: '100%', backgroundColor: "#C2DED1" }}>
            <Card.Img variant="top" src={props.image} style={{width: '100%', height: '25vw', objectFit: 'cover'}}/>
            <Card.Body>
                <Card.Title style={{color: "#354259" }}>{props.title}</Card.Title>
                <Card.Text style={{color: "#354259" }}>
                {props.text}
                </Card.Text>
                <Card.Link href={props.githubLink} style={{color: '#354259'}} target={'_blank'}>GitHub Repo</Card.Link>
                <Card.Link href={props.deployedLink} style={{color: '#354259'}} target={'_blank'}>Deployed App</Card.Link>
            </Card.Body>
        </Card>
    )
};
