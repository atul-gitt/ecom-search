import React from "react";
import Product from "./Product";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))
      ) : (
        <div>No Product Found</div>
      )}
    </div>
  );
}

export default ProductList;
