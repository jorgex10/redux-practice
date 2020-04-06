import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: state.cart.concat(action.product),
    };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    return {
      ...state,
      cart: state.cart.filter((product) => product !== action.product),
    };
  }

  return state;
};

export default createStore(reducer, { cart: [] });
