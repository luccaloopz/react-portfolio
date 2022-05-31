import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

export default function Footer() {
    return (
        <Navbar fixed="bottom" bg="light">
            <Container>
                <Navbar.Brand>My Socials</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="https://github.com/luccaloopz" target="_blank"><FaGithub /></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/lucca-martins/" target="_blank"><FaLinkedin /></Nav.Link>
                <Nav.Link href="https://stackoverflow.com/users/17969532/lucca-martins?tab=profile" target="_blank"><FaStackOverflow /></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
