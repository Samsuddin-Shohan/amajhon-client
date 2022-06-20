import React, { Component } from 'react';
import banner1 from '../../images/1.jpg';
import banner2 from '../../images/2.jpg';
import banner3 from '../../images/3.jpg';

import { Carousel } from 'react-bootstrap';

const Banner = () => {
    console.log('hello');
    return (
        <div>
            <Carousel fade indicators={false}>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={banner1}
                        alt='First slide'
                        style={{ height: '40vw' }}
                    />
                    <Carousel.Caption>
                        <p
                            style={{
                                fontSize: '3vw',
                                fontWeight: 'bolder',
                                color: 'whitesmoke',
                            }}
                        >
                            Our First Priority is you.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={banner2}
                        alt='Second slide'
                        style={{ height: '40vw' }}
                    />

                    <Carousel.Caption>
                        <p
                            style={{
                                fontSize: '3vw',
                                fontWeight: 'bolder',
                                color: 'whitesmoke',
                            }}
                        >
                            Our First Priority is you.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={banner3}
                        alt='Third slide'
                        style={{ height: '40vw' }}
                    />

                    <Carousel.Caption>
                        <p
                            style={{
                                fontSize: '3vw',
                                fontWeight: 'bolder',
                                color: 'whiteSmoke',
                            }}
                        >
                            Our First Priority is you.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
