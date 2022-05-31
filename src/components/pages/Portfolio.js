import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Project from '../Project';

export default function Portfolio() {
    return (
        <Row xs={1} md={2} className="g-4" style={{padding: 70}}>
            {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                    <Project />
                </Col>
            ))}
        </Row>
        
    );
}