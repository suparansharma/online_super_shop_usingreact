import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';

const Review = () => {

    const [cart,setCart] =useState([]);
    useEffect(()=>{

        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const cartProduct = productKey.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity= saveCart[key];
            return product;
        })
        setCart(cartProduct);

    },[])
    return (
        <div>
            
            <h1>This is all about review {cart.length}</h1>
            {
                cart.map(pd=><ReviewItem product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;