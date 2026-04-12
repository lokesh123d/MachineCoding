export function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART_ITEMS":
      return {
        ...state,
        cart: state.cart.filter((val) => val.id !== action.payload),
      };
    case "DECREASE_ITEM":
      return {
        ...state,
        cart: state.cart.map((val) => {
          if (val.id == action.payload.id) {
            return { ...val, quantity: Math.max(1, val.quantity - 1) };
          }
          return val;
        }),
      };
    case "INCREASE_ITEM":
      return {
        ...state,
        cart: state.cart.map((val) => {
          if (val.id == action.payload.id) {
            return { ...val, quantity: val.quantity + 1 };
          }
          return val;
        }),
      };
    default:
      return state;
  }
}
