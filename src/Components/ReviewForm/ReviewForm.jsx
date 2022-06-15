import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [profession, setProfession] = useState('');
    const [img, setImg] = useState('');
    const [rating, setRating] = useState(0);
    const handleSubmitReview = (e) => {
        e.preventDefault();
        axios
            .post('https://everything20.herokuapp.com/review', {
                name,
                description,
                profession,
                img,
                rating,
            })
            .then((res) => console.log(res))
            .then(() => {
                alert('Your Review is submitted');
                e.target.reset();
            });
    };

    return (
        <div>
            <Card className='w-50 mx-auto my-5'>
                <Card.Body>
                    <Form className='my-5' onSubmit={handleSubmitReview}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                placeholder='Your Name'
                                name='name'
                            />
                        </Form.Group>

                        <Form.Group
                            className='mb-3'
                            controlId='formBasicPassword'
                        >
                            <Form.Label>Write Review</Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => setDescription(e.target.value)}
                                type='text'
                                placeholder='Review'
                                name='email'
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='formBasicPassword'
                        >
                            <Form.Label>Profession</Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => setProfession(e.target.value)}
                                type='text'
                                placeholder='Profession'
                                name='cell'
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='formBasicPassword'
                        >
                            <Form.Label>Rate us Out of 5</Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => setRating(e.target.value)}
                                type='number'
                                placeholder='Rating'
                                name='problem'
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='formBasicPassword'
                        >
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => setImg(e.target.value)}
                                type='text'
                                placeholder='Image'
                                name='problem'
                            />
                        </Form.Group>

                        <Button
                            variant='success'
                            className='sub-button'
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewForm;
