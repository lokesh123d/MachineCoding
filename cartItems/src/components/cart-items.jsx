import React, { useEffect, useReducer, useState } from "react";
import { productReducer } from "../reducers/productsReducer";

const CartItems = ({ dispatch, state }) => {
  const [totalPrice, settotalPrice] = useState(0);


  useEffect(() => {
    let total = state.cart.reduce((acc, item) => {
      return (acc += item.price * item.quantity);
    }, 0);
    settotalPrice(total.toFixed(2));
  }, [state.cart]);

  return (
    <div className="cart-comp">
      <h2>Cart Items</h2>
      <h2>Total Amount {totalPrice}$</h2>

      {state.cart.length > 0 ? (
        <div className="cart-container">
          {state.cart.map((item) => {
            return (
              <div className="cart-card" key={item.id}>
                <img src={item.img} alt={item.title} />
                <span className="text-title">{item.title.slice(0, 7)}...</span>
                <span>{item.price}</span>
                <div className="quantity-dets">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_ITEM",
                        payload: {
                          currentQty: item.quantity,
                          id: item.id,
                        },
                      })
                    }
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span
                  style={{cursor:'pointer'}}
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_ITEM",
                        payload: {
                          currentQty: item.quantity,
                          id: item.id,
                        },
                      })
                    }
                  >
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "No Items Yet"
      )}
    </div>
  );
};

export default CartItems;
