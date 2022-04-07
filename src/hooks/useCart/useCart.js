import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products?.length !== 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart);
            //const savedCart =cart.filter(item => item.key ==)
            let savedCart = [];
            for (const key in storedCart) {
                let addedProduct = products?.find((item) => item.key == key);
                //console.log(Array.isArray(addedProduct));
                addedProduct.quantity = storedCart[key];
                savedCart.push(addedProduct);
            }
            //console.log(savedCart);
            setCart(savedCart);
        }
    }, [products]);
    return [cart, setCart];
};
export default useCart;
