import React, { useState, useEffect } from 'react';
import TestimonialCard from './../TestimonialCard/TestimonialCard';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import Slider from 'react-slick';
import './Testimonials';
const Testimonials = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '10px',
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
    };
    const [allReviews, setAllReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://everything20.herokuapp.com/review').then((res) => {
            setAllReviews(res.data);
            setIsLoading(false);
        });
    }, []);

    const count = 0;

    return (
        <div style={{ backgroundColor: 'whitesmoke' }} className='py-2'>
            {isLoading ? (
                <LoadSpinner></LoadSpinner>
            ) : (
                <div>
                    <h1 className='text-center pt-2 text-review fw-bold'>
                        Reviews
                    </h1>

                    <Slider {...settings} className='container'>
                        {allReviews.map((review, idx) => (
                            <div>
                                <div className='d-flex justify-content-center flex-wrap m-5 review-container'>
                                    <TestimonialCard
                                        img={review.img}
                                        name={review.name}
                                        description={review.description}
                                        rating={review.rating}
                                        profession={review.profession}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='py-2 text-center'>
                        <Link to='/reviewform'>
                            <button className='btn btn-success text-white'>
                                Drop A Review
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
