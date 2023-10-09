import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Assets/LogoBlanco@3x.png";

const NavHeader = () => {
    return (
        <Navbar expand="lg" >
            <Container className='mt-1 mb-1' >
                <Navbar.Brand href="#home" className='text-white'><img className="nav-logo" src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between' >
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#home" className='text-white '>Home</Nav.Link>
                        <Nav.Link href="#nosotros" className='text-white '>Nosotros</Nav.Link>
                        <Nav.Link href="#servicios" className=' text-white '>Servicios</Nav.Link>
                        <Nav.Link href="#contacto" className='text-white '>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavHeader
