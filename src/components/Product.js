import React from "react";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img className="product-image" src={product.image} alt={product.name} />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
