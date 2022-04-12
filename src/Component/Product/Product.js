import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {name,img,seller,price,stock,key} = props.product;
    // console.log(key)
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
            <h4 className='product-name'> <Link to={"/product/" +key}>{name}</Link></h4>
            <br />
            <p><small>By:{seller}</small></p>
            <p>${price}</p>
            <br />
            <p><small>Only {stock} left in stock - Order soon</small></p>
            { props.showAddToCart === true && <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faCartShopping} />Add to cart</button>}
            </div>
           
        </div>
    );
};

export default Product;