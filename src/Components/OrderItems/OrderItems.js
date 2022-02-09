import React from 'react';

const Orderitems = ({ product, handleAddtoCart }) => {
    const { name, img, price, seller, star, stock } = product;
    return (
        <div
            className='border-bottom border-1 border-secondary py-2 px-2 d-flex align-items-center justify-content-unset'
            id='product-section'
        >
            <div>
                <img src={img} alt='' />
            </div>
            <div className='ms-3'>
                <h4>{name}</h4>
                <p className='lh-1'>Price: {price}</p>
                <p className='lh-1'>
                    <small>Seller: </small>
                    {seller}
                </p>
                <small className='d-block'>Only {stock} items available</small>
            </div>
        </div>
    );
};

export default Orderitems;
