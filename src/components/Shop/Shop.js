import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart] = useState([]);
   
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        product={product}
                        ></Product>)
                }
            </div>
    
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;