import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total =total + product.price;
        
    }

    let shipping = 0;
    if(total > 15){
        shipping = 4.55;
    }

    else if(total >0){
        shipping = 12.55;
    }

    else if(total >35){
        shipping = 0;
    }

    const tax = total/10;
    const grandTotal = total+shipping+tax;

    const formatNumber = num =>{

        const precision = num.toFixed(2);
        return Number(precision);

    }

    console.log(cart);
    return (
        <div>
            <h1>This is All about Cart</h1>
            <h3>Order Summary:{cart.length}</h3>
            <p><small>Price: {formatNumber(total)}</small></p>
            <p><small>Shipping : {shipping}</small></p>
            <p><small>Tax + vat :{formatNumber(tax)}</small></p>
            <p><small>Total Price:{formatNumber(grandTotal)}</small></p>
        </div>
    );
};

export default Cart;