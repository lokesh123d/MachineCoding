import React, { useReducer } from 'react'
import Products from './components/Products'
import CartItems from './components/cart-items'
import { productReducer } from './reducers/productsReducer';

const App = () => {
   const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
  });
  return (
    <div>
      <div className='full-container'>
      <Products dispatch={dispatch} state={state}/>
      <CartItems dispatch={dispatch} state={state}/>
   </div>
    </div>
  )
}

export default App