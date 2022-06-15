import React from 'react';
import './Cart.css';

const Cart = ({ cart, children }) => {
    let totalQuantity = 0;
    let totalPrice = 0.0;
    let itemNumber = cart.length;
    for (const item of cart) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        totalQuantity += parseInt(item.quantity);
        totalPrice += parseFloat(item.price) * parseFloat(item.quantity);
        // console.log(totalQuantity, totalPrice);
    }
    let shipping = totalPrice * 0.07;
    let tax = totalPrice * 0.08;
    let total = totalPrice + shipping + tax;

    return (
        <div>
            <div className='text-center'>
                <h1 className=' mt-2' style={{ color: 'green' }}>
                    Your Cart
                </h1>
                <p>Items Ordered: {totalQuantity} </p>
            </div>
            <div className='mt-5 '>
                <div className='row  justify-content-start mb-2 '>
                    <div className='col'>
                        <h5>Item Number:</h5>
                    </div>
                    <div className='col'>
                        <h5>{itemNumber}</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h5>Shipping & Handling:</h5>
                    </div>
                    <div className='col'>
                        <h5>{shipping.toFixed(2)}</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h5>Total Before Taxes:</h5>
                    </div>
                    <div className='col'>
                        <h5>{totalPrice.toFixed(2)}</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h5>Estimated Taxes:</h5>
                    </div>
                    <div className='col'>
                        <h5>{tax.toFixed(2)}</h5>
                    </div>
                </div>
                <div className='row justify-content-start mb-2'>
                    <div className='col'>
                        <h3 className=' fw-bold' style={{ color: 'green' }}>
                            Orders Total:
                        </h3>
                    </div>
                    <div className='col'>
                        <h3 className=' fw-bold' style={{ color: 'green' }}>
                            {total.toFixed(2)}
                        </h3>
                    </div>
                </div>
            </div>
            <div className='text-center'>{children}</div>
        </div>
    );
};

export default Cart;
