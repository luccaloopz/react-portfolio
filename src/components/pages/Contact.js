import React from 'react';
import { FloatingLabel, Form, Button, Card } from 'react-bootstrap';

export default function Contact() {
  return (
    <Card  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '25%', marginRight: '25%', marginTop: '2%', padding: '10px'}} border="dark" bg='light'>
      <Card.Title className="mb-3">Contact Me</Card.Title>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control type="name" placeholder="John Doe"/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Email address"  className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
        <Form.Control as="textarea" placeholder="Leave your message here"/>
      </FloatingLabel>

      <Form.Group>
          <Button type="submit">Submit</Button>
      </Form.Group>
    </Card>
  )
}