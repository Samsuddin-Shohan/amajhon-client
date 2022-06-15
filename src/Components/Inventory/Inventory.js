import { CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import InventoryProducts from '../InventoryProducts/InventoryProducts';
import './Inventory.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart/useCart';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);

    useEffect(() => {
        fetch(`https://everything20.herokuapp.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);
    useEffect(() => {
        if (products.length != 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart);
            //const savedCart =cart.filter(item => item.key ==)
            let savedCart = [];
            for (const key in storedCart) {
                let addedProduct = products.find((item) => item.key == key);
                //console.log(Array.isArray(addedProduct));
                addedProduct.quantity = storedCart[key];
                savedCart.push(addedProduct);
            }
            //console.log(savedCart);
            setCart(savedCart);
        }
    }, [products]);
    return (
        <div id='shopping-section' className='row pt-3 '>
            <div id='products-section' className='col-md-9 col-12 '>
                <div>
                    <CRow md={{ cols: 2 }}>
                        {products.map((product, idx) => (
                            <InventoryProducts
                                key={product.key}
                                product={product}
                            ></InventoryProducts>
                        ))}
                    </CRow>
                </div>
            </div>

            <div id='cart-section' className='col-md-3 col-0  ps-2 '>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Inventory;
