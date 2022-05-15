import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';
import happyImage from './../../images/giphy.gif'

const Review = () => {

    const [cart,setCart] =useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () =>{
        history.push('/shipment');
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

    },[]);

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt="" srcset="" />
    }

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
            {
                thankyou
            }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;