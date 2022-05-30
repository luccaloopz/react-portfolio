import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <Navbar fixed="bottom" >
            <Container>
                <Navbar.Brand>My Socials</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Link><FontAwesomeIcon icon={faCoffee} /></Navbar.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
// this component is not showing up on page and is forcing the navbar to also not show up on page
