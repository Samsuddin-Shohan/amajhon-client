import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-danger mt-2'>Your Cart</h1>
                <p>Items Ordered: {cart.length} </p>
            </div>
            <div className='mt-5 '>
                <div className='row  justify-content-start mb-2 '>
                    <div className='col'>
                        <h5>Item:</h5>
                    </div>
                    <div className='col'>
                        <h5>1</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h5>Shipping & Handling:</h5>
                    </div>
                    <div className='col'>
                        <h5>1</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h5>Total Before Taxes:</h5>
                    </div>
                    <div className='col'>
                        <h5>1</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h5>Estimated Taxes:</h5>
                    </div>
                    <div className='col'>
                        <h5>1</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h3 className='text-danger fw-bold'>Orders Total:</h3>
                    </div>
                    <div className='col'>
                        <h3 className='text-danger fw-bold'>1</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
