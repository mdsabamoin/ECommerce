
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomCart from "./CustomCart";
import { useContext } from 'react';
import { Context } from '../Store/ContextProvider';
import axios from "axios";

function CustomNavbar() {
   const ctx = useContext(Context);
    const HandleLogout =  ()=>{
      localStorage.removeItem("Token");  
      ctx.setToken(null);
      ctx.setLogin(false);
    }
    
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="bg-body-black" style={{height:"50px"}}>
            <div className='mx-auto'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" className='fs-3 m-3 text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/store" className='fs-3 m-3 text-white'>Store</Nav.Link>
                            {/* <Nav.Link as={Link} to="/about" className='fs-3 m-3 text-white'>About</Nav.Link> */}
                            <Nav.Link as={Link} to="/contact" className='fs-3 m-3 text-white'>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/profile" className='fs-3 m-3 text-white'>Profile</Nav.Link>
                            <Nav.Link as={Link} to="/product" className='fs-3 m-3 text-white'>Product</Nav.Link>
                            <Nav.Link as={Link} to="/" className='fs-3 m-3 text-white' onClick={HandleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </div>
            <CustomCart/>
        </Navbar>
    );
}

export default CustomNavbar;