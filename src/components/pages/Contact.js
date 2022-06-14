import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Card } from 'react-bootstrap';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState({
    name: '',
    email: '',
    body: '',
  });

  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
  };

  const sendEmail = () => {
    console.log(email.body);

    return window.location = `mailto:luccamartins2011@yahoo.com?&subject=*Enter The Subject Line Here*
&body=Hello Lucca, My name is ${email.name}. ${email.body}`
  };

  const handleChange = (event) => {
    event.preventDefault();

    const inputField = event.target.id;
    const value = event.target.value;

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

    setEmail({
      ...email,
      [event.target.name]: value,
    });
    
  };

  return (
      <Card hasValidation style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '25%', marginRight: '25%', marginTop: '5%', padding: '10px', backgroundColor: '#C2DED1'}} border="dark">
        <Card.Title className="mb-3">Contact Me</Card.Title>
        <FloatingLabel label="Name" className="mb-3">
          <Form.Control id='Name' type="name" name='name' placeholder="John Doe" value={email.name} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel label="Email address"  className="mb-3">
          <Form.Control id='Email' type="email" name='email' placeholder="name@example.com" value={email.email} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel label="Body" className="mb-3">
          <Form.Control id='Body' as="textarea" name='body' placeholder="Leave your message here" value={email.body} onChange={handleChange} required />
        </FloatingLabel>

        <Form.Group>
            <Button type="submit" onClick={sendEmail}>Submit</Button>
        </Form.Group>
        <p style={{paddingTop: 15}}>{message}</p>
      </Card>
  )
}