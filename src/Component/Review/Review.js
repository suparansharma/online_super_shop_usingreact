import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';

const Review = () => {

    const [cart,setCart] =useState([]);

    const handlePlaceOrder = () =>{
     setCart([]);
     processOrder();
    }


    const removeProduct = (productKey) =>{
        console.log("remove product",productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
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
        <div className='twin-container'>
            <div className="product-container">
            <h1>This is all about review {cart.length}</h1>
            {
                cart.map(pd=><ReviewItem
                     product={pd}
                     key={pd.key}
                     removeProduct={removeProduct}
                
                ></ReviewItem>)
            }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;