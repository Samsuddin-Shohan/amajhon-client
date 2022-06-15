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
                <h4 className=' mt-2 text-success'>Your Cart</h4>
                <p className='fw-bold'>Items Ordered: {totalQuantity} </p>
            </div>
            {/* <div className='mt-5 '>
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
            </div> */}
            <table class='table-success table-bordered mx-auto'>
                <tbody>
                    <tr>
                        <td className='py-2 px-1'>Item Number</td>
                        <td className='py-2 px-1'>{itemNumber}</td>
                    </tr>
                    <tr>
                        <td className='py-2 px-1'>Shipping & Handling</td>
                        <td className='py-2 px-1'>{shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='py-2 px-1'>Total Before Taxes</td>
                        <td className='py-2 px-1'>{totalPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='py-2 px-1'>Tax</td>
                        <td className='py-2 px-1'>{tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='py-2 px-1'>Orders Total</td>
                        <td className='py-2 px-1'>{total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <div className='text-center mb-3'>{children}</div>
        </div>
    );
};

export default Cart;
