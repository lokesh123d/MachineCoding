import React, { useEffect, useReducer } from "react";
import { productReducer } from "../reducers/productsReducer";

// url = https://dummyjson.com/products

const Products = ({ dispatch, state }) => {
  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    dispatch({ type: "ADD_PRODUCTS", payload: result.products });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-container-outside">
      <h1>Product Listing.</h1>

      <div className="product-container">
        {state.products.map((item) => {
          return (
            <div key={item.id} className="product-card">
              <img src={item.thumbnail} alt={item.title} />
              <span>{item.title}</span>
              <br />
              <span>{item.price}</span>
              <br />
              <br />
              <span>{item.description}</span>
              <br />
              <button
                className="cart-btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_CART",
                    payload: {
                      id: item.id,
                      img: item.thumbnail,
                      price: item.price,
                      quantity: 1,
                      title: item.title,
                    },
                  })
                }
                disabled={state.cart.find((val) => val.id == item.id)}
              >
                Add To Cart
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_CART_ITEMS",
                    payload: item.id,
                  })
                }
                className="remove-cart-btn"
              >
                Remove From Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
