import React, { useState } from 'react';
import './Header.css';
import logo from './../../images/Silton .png';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import useAuth from '../../hooks/useAuth/useAuth';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    const { user, logOut } = useAuth();
    const [text, setText] = useState('Logout');
    const handleLogoutText = () => {
        let nameGroup = user.displayName.split(' ');
        let name = nameGroup[nameGroup.length - 1];
        setText(name);
    };
    return (
        <div>
            <Navbar bg='light' id='navbar' expand='lg'>
                {/* <Container> */}
                <Navbar.Brand className='me-auto ps-md-5 ps-2' href='/'>
                    Everything
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='ms-auto pe-5'>
                        <NavLink to='/' className='nav-link-1'>
                            Home
                        </NavLink>

                        <NavLink to='/shop' className='nav-link-1'>
                            Shop
                        </NavLink>
                        <NavLink to='/review' className='nav-link-1'>
                            Order Review
                        </NavLink>
                        <NavLink to='/inventory' className='nav-link-1'>
                            Inventory
                        </NavLink>
                        <NavLink to='/reviewform' className='nav-link-1'>
                            Make your Opionion
                        </NavLink>

                        {user.email ? (
                            <Button
                                variant='success'
                                className='log-out'
                                onClick={logOut}
                                onMouseOver={() => setText('Logout')}
                                onMouseLeave={handleLogoutText}
                            >
                                {text}
                            </Button>
                        ) : (
                            <NavLink to='/login' className='nav-link-1'>
                                Login
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default Header;
