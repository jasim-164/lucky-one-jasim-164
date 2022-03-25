import React from 'react';

const Product = ({key,product,handleAddToCart}) => {
    return (
        <div>
            <div className="product-item">
            <h1>{product.name}</h1>
            </div>
        </div>
    );
};

export default Product;