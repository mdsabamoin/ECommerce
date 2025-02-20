import React from "react";
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomCart from "./CustomCart";

const LoginNavbar = ()=>{
    return  <Navbar expand="lg" bg="dark" variant="dark" className="bg-body-black" style={{height:"50px"}}>
    <div className='mx-auto'>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <div  style ={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
                    <div><Nav.Link  className='fs-3 m-3 text-white'><h2>ECommerce</h2></Nav.Link></div>
                    <div><Nav.Link as={Link} to="/" className='fs-3 m-3 text-white'>Login</Nav.Link></div>
                    <div><Nav.Link as={Link} to="/about" className='fs-3 m-3 text-white'>About</Nav.Link></div>
                    <div><Nav.Link as={Link} to="/product" className='fs-3 m-3 text-white'>Product</Nav.Link></div>
                    <Nav.Link className='fs-3 m-3 text-white'>Sign Up</Nav.Link>
                    {/* <Nav.Link className='fs-3 m-3 text-white'>Logout</Nav.Link> */}
                    </div>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </div>
</Navbar>
}

export default LoginNavbar;