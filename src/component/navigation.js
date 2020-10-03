import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const navigation = () => {

    return(
        <div>
            <Navbar className="navbar" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Karmila Jaya</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="link" to="/"> Home </Link>
                        <Link className="link" to="/about">About Us</Link>
                        <Link className="link" to="/project">Projects</Link>
                        <Link className="link" to="/gallery">Gallery</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default navigation