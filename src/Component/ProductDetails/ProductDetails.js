import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    // console.log(product)
    return (
        <div>
            <h1>{productKey} about ProductDetails</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;