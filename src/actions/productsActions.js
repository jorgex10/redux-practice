import axios from 'axios';

const replaceProducts = () => (dispatch) => axios.get('http://localhost:3001/products').then((response) => {
  dispatch({
    type: 'LOAD_PRODUCTS',
    products: response.data,
  });
});

export { replaceProducts };
