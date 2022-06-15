import React, { useState, useEffect } from 'react';
import TestimonialCard from './../TestimonialCard/TestimonialCard';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Testimonials = () => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        axios
            .get('https://everything20.herokuapp.com/review')
            .then((res) => setAllReviews(res.data));
    }, []);

    const count = 0;

    return (
        <div style={{ backgroundColor: 'whitesmoke' }} className='py-2'>
            <h1 className='text-center pt-5 text-success fw-bold'>Reviews</h1>

            <Carousel indicators={false} interval={5000}>
                {allReviews.map((review, idx) => (
                    <Carousel.Item>
                        <div className=''>
                            <div className='d-flex justify-content-center flex-wrap m-5'>
                                <TestimonialCard
                                    img={review.img}
                                    name={review.name}
                                    description={review.description}
                                    rating={review.rating}
                                    profession={review.profession}
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='py-5 text-center'>
                <Link to='/reviewform'>
                    <button className='btn btn-success text-white'>
                        Drop A Review
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Testimonials;
