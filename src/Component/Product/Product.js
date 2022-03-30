import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const {name,img,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
            <h4 className='product-name'>{name}</h4>
            <br />
            <p><small>By:{seller}</small></p>
            <p>${price}</p>
            <br />
            <p><small>Only {stock} left in stock - Order soon</small></p>
            <button className='main-button'> <FontAwesomeIcon icon={faCartShopping} />Add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;