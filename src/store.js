import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const logger = (store) => (next) => (action) => {
  console.log('Dispatching', action);
  const result = next(action);
  console.log('Next state', store.getState());

  return result;
};

export default createStore(rootReducer, applyMiddleware(logger, thunk));
