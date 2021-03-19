import React from "react";
import "./Product.css";

function Product({ title, image, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">{`Rs. ${price}`}</p>
    </div>
  );
}

export default Product;
