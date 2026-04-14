import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const productData = useLoaderData();

  return (
    <div>
      <h2>All Trending Products</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {productData.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
                <br />
                <span>{item.title}</span>
                <br />
                <span>${item.price}</span>
              </Link>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/products">See All Products</Link>
      </div>
    </div>
  );
};

export default Home;