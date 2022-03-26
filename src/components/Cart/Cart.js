
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props
    // console.log(cart);
    //function getRandomElFromArray(arrayLenght) {
    //    return Math.floor(Math.random() * arrayLength);
     // }
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            {cart.map((item) =>(
                <div className='col' key={item.id}>
                <div>
                <img src={item.img} alt='item' height='150' width='150'></img>
                </div>
                <div>{item.name}</div>
                </div>
             )) }

            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            <button className='btn'>Choose One</button>
        </div>
    );
};

export default Cart;