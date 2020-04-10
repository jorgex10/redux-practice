const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;
