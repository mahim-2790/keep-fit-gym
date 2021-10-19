import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar className="fw-bold fs-4">
                        <NavLink to="/home" className="text-decoration-none p-2 me-3  text-light">keepFit</NavLink>
                    </Navbar>
                    <Navbar.Toggle aria-controls="navbarScroll" className="text-dark" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', color: 'white' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className="text-decoration-none p-2 me-3  text-light">Home</NavLink>
                            <NavLink to="/aboutus" className="text-decoration-none p-2 me-3 text-light ">About Us</NavLink>
                            <NavLink to="/faqs" className="text-decoration-none p-2 me-3 text-light ">FAQs</NavLink>
                            <span style={{ color: "white", marginRight: "10px", marginTop: "7px" }}>{user.displayName}</span>
                            {
                                user.email ? <button onClick={logOut} className="btn btn-danger">Log Out</button> :
                                    <NavLink to="/login" style={{ color: "white", marginRight: "10px", textDecoration: "none", marginTop: "7px" }} className="btn btn-danger">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;