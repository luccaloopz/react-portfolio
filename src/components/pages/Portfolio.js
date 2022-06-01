import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from '../Project';
import projects from '../../projects.json'

export default function Portfolio() {
    return (
        <Row xs={1} md={2} className="g-4" style={{padding: 70}}>
            {projects.map((project) => (
                <Col>
                    <Project key={project.id} image={project.image} title={project.title} text={project.text} githubLink={project.githubLink} deployedLink={project.deployedLink}/>
                </Col>
            ))}
        </Row>
    );
}