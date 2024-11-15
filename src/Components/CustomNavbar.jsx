
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomCart from "./CustomCart";
function CustomNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="bg-body-black" style={{height:"50px"}}>
            <div className='mx-auto'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='fs-3 m-3 text-white'>Home</Nav.Link>
                            <Nav.Link href="#link" className='fs-3 m-3 text-white'>Store</Nav.Link>
                            <Nav.Link href="#link" className='fs-3 m-3 text-white'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </div>
            <CustomCart/>
        </Navbar>
    );
}

export default CustomNavbar;