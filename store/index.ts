/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const bindMiddleware = (middleware: any[]) => {
  // if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  // }
  // return applyMiddleware(...middleware);
};

export default (initialState) => createStore(
  reducers,
  initialState,
  bindMiddleware([]),
);
