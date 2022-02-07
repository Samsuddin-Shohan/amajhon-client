import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    let [displayProducts, setDisplayProducts] = useState([]);
    const handleAddtoCart = (product) => {
        // console.log(product);
        let newCart = [];
        const cartKeys = cart.map((item) => item.key);
        if (cartKeys.includes(product.key)) {
            product.quantity++;
            newCart = [...cart];
        } else {
            newCart = [...cart, product];
        }

        //console.log(newCart);
        setCart(newCart);
        // console.log(cart);
        addToDb(product.key);
    };

    useEffect(() => {
        fetch('./products.JSON')
            .then((res) => res.json())
            .then((data) => {
                setDisplayProducts(data);
                setProducts(data);
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
    const handleSearch = (e) => {
        const searchText = e.target.value;
        displayProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayProducts(displayProducts);
        // console.log(displayProducts);
    };

    return (
        <div>
            <div id='search-section' className='bg-secondary text-center'>
                <input
                    type='text'
                    placeholder='Search Your Product'
                    className='w-25  p-2 m-2 fs-4'
                    onChange={handleSearch}
                />
            </div>
            <div id='shopping-section' className='row pt-3'>
                <div
                    id='products-section'
                    className='col-9 border-end border-1 border-secondary pe-2 border-bottom-1'
                >
                    {displayProducts.map((product, idx) => (
                        <Product
                            key={product.key}
                            product={product}
                            handleAddtoCart={handleAddtoCart}
                        ></Product>
                    ))}
                </div>
                <div id='cart-section' className='col-3 ps-2 '>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
