import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart/useCart';
import Header from '../Header/Header';
import { CRow } from '@coreui/react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    let [displayProducts, setDisplayProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;

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

    useEffect(() => {
        fetch(
            `https://everything20.herokuapp.com/products?page=${page}&&size=${size}`
        )
            .then((res) => res.json())
            .then((data) => {
                setDisplayProducts(data.products);
                setProducts(data.products);
                let count = Math.ceil(data.count / size);
                setPageCount(count);
            });
    }, [page]);

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
            <div id='search-section' className='bg-light text-center'>
                <input
                    type='text'
                    placeholder='Search Here'
                    className='w-25  p-2 m-2 border-success search-button'
                    onChange={handleSearch}
                />
            </div>
            <div id='shopping-section' className='row pt-3 '>
                <div id='products-section' className='col-9 '>
                    <div>
                        <CRow md={{ cols: 2 }}>
                            {displayProducts.map((product, idx) => (
                                <Product
                                    key={product.key}
                                    product={product}
                                    handleAddtoCart={handleAddtoCart}
                                ></Product>
                            ))}
                        </CRow>
                    </div>
                   
                </div>

                <div id='cart-section' className='col-3 ps-2 '>
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn btn-success mt-3'>
                                Review your order
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
