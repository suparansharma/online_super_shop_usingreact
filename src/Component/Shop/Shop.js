import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData';
import './Shop.css'
import Review from './../Review/Review';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts]= useState(first10);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const priviousCart = productKey.map(existingKey =>{
            const product = fakeData.find(pd=>pd.key ===existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        }) 
        setCart(priviousCart);
    })
    

    const handleAddProduct =(product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd =>pd.key !== toBeAddedKey)
            newCart = [...others,sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        //  count = sameProduct.length; 
        // const newCart = [...cart,product]
        setCart(newCart);


        
        addToDatabaseCart(product.key,count);
       
    }

    return (
        <div className='twin-container'>
           <div className="product-container">
    
            {
                products.map(pd=>
                
                <Product
                showAddToCart={true}
                 product={pd} 
                 handleAddProduct = {handleAddProduct}
                 productKey = {pd.key}
                 
                 ></Product>)
            }
           </div>

           <div className="cart-container">
               <Cart cart={cart}>
                   <Link to="/review"><button className="main-button">Review Order</button></Link>
                  
               </Cart>
           </div>
        
        </div>
    );
};

export default Shop;