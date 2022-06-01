import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Card } from 'react-bootstrap';

export default function Contact() {
  const [message, setMessage] = useState('');

  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
  };

  const handleChange = (event) => {
    const inputField = event.target.id;

    if (event.target.id === 'Email') {
      const emailValue = event.target.value;
      const isValid = emailValidation(emailValue); 

      if(!isValid) {
        setMessage(`Email is invalid`);
      };
    };

    if (event.target.value === '') {
      setMessage(`${inputField} field must be included`)
    };
    
  };

  return (
      <Card hasValidation style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '25%', marginRight: '25%', marginTop: '5%', padding: '10px'}} border="dark" bg='light'>
        <Card.Title className="mb-3">Contact Me</Card.Title>
        <FloatingLabel label="Name" className="mb-3">
          <Form.Control id='Name' type="name" placeholder="John Doe" onBlur={handleChange} required />
        </FloatingLabel>

        <FloatingLabel label="Email address"  className="mb-3">
          <Form.Control id='Email' type="email" placeholder="name@example.com" onBlur={handleChange} required />
        </FloatingLabel>

        <FloatingLabel label="Message" className="mb-3">
          <Form.Control id='Message' as="textarea" placeholder="Leave your message here" onBlur={handleChange} required />
        </FloatingLabel>

        <Form.Group>
            <Button type="submit">Submit</Button>
        </Form.Group>
        <p style={{paddingTop: 15}}>{message}</p>
      </Card>
  )
}