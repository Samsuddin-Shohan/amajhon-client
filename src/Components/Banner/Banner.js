import React, { Component, useEffect, useState } from 'react';
import banner1 from '../../images/1.jpg';
import banner2 from '../../images/2.jpg';
import banner3 from '../../images/3.jpg';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typewriter from 'typewriter-effect';
import useAuth from '../../hooks/useAuth/useAuth';

const Banner = () => {
    console.log('hello');
    return (
        <OwlCarousel
            className='owl-theme owl-carousel '
            smartSpeed={1000}
            loop
            margin={5}
            items={1}
            rewind
            autoPlay={true}
            autoplaySpeed={5000}
            mouseDrag={true}
        >
            <div class='item postition-relative'>
                <img src={banner1}></img>
                <div class='carousel-content'>
                    <Typewriter
                        options={{
                            strings: [
                                `Hello Everyone`,
                                'Welcome to Everything',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div class='item'>
                <img src={banner2}></img>
                <div class='carousel-content'>
                    <Typewriter
                        options={{
                            strings: [
                                `Hello Everyone`,
                                'Welcome to Everything',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div class='item'>
                <img src={banner3}></img>
                <div class='carousel-content'>
                    <Typewriter
                        options={{
                            strings: [
                                `Hello Everyone`,
                                'Welcome to Everything',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </OwlCarousel>
    );
};

export default Banner;
