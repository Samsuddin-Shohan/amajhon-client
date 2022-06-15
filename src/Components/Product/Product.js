import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardImage,
    CCardText,
    CCardTitle,
    CCol,
} from '@coreui/react';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';

const Product = ({ product, handleAddtoCart }) => {
    const { name, img, price, seller, stock } = product;
    return (
        <CCol
            xs
            className='d-flex align-items-stretch  justify-content-center border-0 mb-3'
        >
            <CCard>
                <CCardImage
                    orientation='top'
                    style={{ height: '280px', width: '280px' }}
                    src={img}
                />
                <CCardBody>
                    <CCardTitle className='product-title'>{name}</CCardTitle>
                    <CCardText>{stock} Items Availlable</CCardText>
                </CCardBody>
                <CCardFooter className='d-flex justify-content-between align-items-center'>
                    <p className='fw-bold'>Price: {price}</p>
                    <Button
                        className='btn'
                        id='cart-button'
                        onClick={() => handleAddtoCart(product)}
                    >
                        Add to Cart
                    </Button>
                </CCardFooter>
            </CCard>
        </CCol>
        // <div
        //     className='border-bottom border-1 border-secondary py-2 px-2 d-flex align-items-center justify-content-unset'
        //     id='product-section'
        // >
        //     <div>
        //         <img src={img} alt='' />
        //     </div>
        //     <div className='ms-3'>
        //         <h4>{name}</h4>
        //         <p className='lh-1'>Price: {price}</p>
        //         <p className='lh-1'>
        //             <small>Seller: </small>
        //             {seller}
        //         </p>
        //         <small className='d-block'>Only {stock} items available</small>
        //         <button
        //             className='btn btn-warning mt-3'
        //             onClick={() => handleAddtoCart(product)}
        //         >
        //             Add to Cart
        //         </button>
        //     </div>
        // </div>
    );
};

export default Product;
