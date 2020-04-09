import { createStore, applyMiddleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const bindMiddleware = (): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware());
  }
  return applyMiddleware();
};

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (initialState: any) => createStore(
  reducers,
  initialState,
  bindMiddleware(),
);
