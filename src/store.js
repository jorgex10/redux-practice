import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return {
      ...state,
      products: action.products,
    };
  }

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

const logger = (store) => (next) => (action) => {
  console.log('Dispatching', action);
  const result = next(action);
  console.log('Next state', store.getState());

  return result;
};

export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, thunk));
