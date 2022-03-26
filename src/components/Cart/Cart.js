
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart,handleRemove,handleRemoveAll,randomChoose}=props
    // console.log(cart);
    //function getRandomElFromArray(arrayLenght) {
    //    return Math.floor(Math.random() * arrayLength);
     // }
    /* <article ...
     {
       product && product.length > 0 &&
       product[getRandomElFromArray(product.length)]
     }*/
  
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

   /* const [list, setList] = React.useState(cart);
    function handleRemove(id) {
        const length =Math.floor(Math.random() * list.length)
        const newList = list.filter((item) => item.id !== id);
    
        setList(newList);
      }
    */
    if(cart.length===0){
        <h1>your cart is empty</h1>
    }
    return (
        <div className='cart'>
            <h1>Cart Items</h1>
            <div className='cart-empty'>{cart.length===0 &&<h5 >Your cart is empty</h5>}</div>
            {cart.map((item) =>(
                <div className='col' key={item.id}>
                <div>
                <img src={item.img} alt='item' height='150' width='150'></img>
                </div>
                <div>{item.name}</div>
                <div> <button className='btn' onClick={() => handleRemove(item)}>Remove One</button></div>
                </div>
                
             )) }

            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            <div> <button className='btn' onClick={() => handleRemoveAll(cart)}>Remove All</button></div>
            <div> <button className='btn' onClick={() => randomChoose(cart)}>Random Choose</button></div>
            

        </div>
    );
};

export default Cart;