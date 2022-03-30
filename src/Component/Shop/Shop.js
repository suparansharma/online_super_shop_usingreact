import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from './../../fakeData';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts]= useState(first10);
console.log(first10);


    return (
        <div className='shop-container'>
           <div className="product-container">
    
            {
                products.map(pd=><Product product={pd} ></Product>)
            }
           </div>

           <div className="cart-container">
               <h1>this is cart container</h1>
           </div>
        
        </div>
    );
};

export default Shop;