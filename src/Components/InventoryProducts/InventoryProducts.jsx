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

const InventoryProducts = ({ product }) => {
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
                </CCardBody>
                <CCardFooter className='d-flex justify-content-between align-items-center'>
                    <CCardText className='text-success fw-bold'>
                        Only {stock} Items Availlable
                    </CCardText>
                </CCardFooter>
            </CCard>
        </CCol>
    );
};

export default InventoryProducts;
