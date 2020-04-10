import axios from 'axios';

const replaceProducts = () => (dispatch) => axios.get('http://localhost:3001/products').then((response) => {
  dispatch({
    type: 'LOAD_PRODUCTS',
    products: response.data,
  });
});

const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  product,
});

const removeFromCart = (product) => ({
  type: 'REMOVE_FROM_CART',
  product,
});

export { replaceProducts, addToCart, removeFromCart };
