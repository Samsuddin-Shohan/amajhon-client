import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://everything20.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);
    return [products, setProducts];
};
export default useProducts;
