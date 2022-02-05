import React from 'react';
import './Header.css';
import logo from './../../images/logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt='' id='logo' />
            </div>
            <div className='bg-black' id='navbar'>
                <NavLink to='/shop' className='nav-link-1'>
                    Shop
                </NavLink>
                <NavLink to='/review' className='nav-link-1'>
                    Order Review
                </NavLink>
                <NavLink to='/inventory' className='nav-link-1'>
                    Inventory
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
