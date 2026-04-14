import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductItem = () => {
  const productData = useLoaderData();

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <Link to="/products">Back to Products</Link>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <img src={productData.thumbnail} alt={productData.title} />
          <br />
          <span>{productData.title}</span>
          <br />
          <span>${productData.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
