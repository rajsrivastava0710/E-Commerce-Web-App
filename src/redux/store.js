import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
const middlewares = [logger]; //in future we may need more than 1 , so array

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;