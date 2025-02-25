// ProductList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/productlist.css";

const ProductList = ({ products }) => {
  const navigate = new useNavigate();

  const handleBuyClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product detail page
  };

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <button onClick={() => handleBuyClick(product.id)}>Comprar</button>
          </div>
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ProductList;
