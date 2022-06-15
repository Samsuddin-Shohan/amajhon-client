import React from 'react';
import './Footer.css';
import logo from './../../images/Silton .png';

const Footer = () => {
    return (
        <div className='bg-success text-light  row ' id='footer'>
            <div className='col-6 ps-5 d-flex flex-column justify-content-between'>
                {/* <p className='logo'>Everything</p> */}
                <img
                    src={logo}
                    alt=''
                    style={{ height: '120px', width: '120px' }}
                />
                <p>Copyright @ Samsuddin Shohan </p>
            </div>
            <div className='col-3 lh-1'>
                <p>About Hospital</p>
                <p>Read our blog</p>
                <p>Sign up to deliver</p>
                <p>Add your Information</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
            </div>
            <div className='col-3 lh-1'>
                <p>Get help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Hospitals near me</p>
                <p>Services</p>
            </div>
        </div>
    );
};

export default Footer;
