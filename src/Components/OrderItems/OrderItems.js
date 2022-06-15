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

const Orderitems = ({ product, handleAddtoCart }) => {
    const { name, img, price, seller, star, stock } = product;
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
                    <CCardText>
                        {' '}
                        <span className='text-success fw-bold'>
                            Seller:
                        </span>{' '}
                        {seller}
                    </CCardText>
                </CCardBody>
                <CCardFooter className='d-flex justify-content-between align-items-center'>
                    <p className='fw-bold'>Price: {price}</p>
                </CCardFooter>
            </CCard>
        </CCol>
    );
};

export default Orderitems;
