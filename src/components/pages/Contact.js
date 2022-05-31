import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Card } from 'react-bootstrap';

export default function Contact() {
  // const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState('');

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  const nameInput = {}

  const handleChange = () => {
    // setMessage(event.target.value);
    if (nameInput.value.length === 0) {
      setMessage('Name must be included')
    }
    
  };

  return (
    // <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Card hasValidation style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '25%', marginRight: '25%', marginTop: '5%', padding: '10px'}} border="dark" bg='light'>
        <Card.Title className="mb-3">Contact Me</Card.Title>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="name" placeholder="John Doe" required/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Email address"  className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
          <Form.Control as="textarea" placeholder="Leave your message here" required />
        </FloatingLabel>

        <Form.Group>
            <Button type="submit">Submit</Button>
        </Form.Group>
        <p style={{paddingTop: 30}} onChange={handleChange}>{message}</p>
      </Card>
    // </Form>
  )
}