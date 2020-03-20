import { combineReducers } from 'redux';

import books from './books';
import viewer from './viewer';

export default combineReducers({
  books,
  viewer,
});
