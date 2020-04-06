import { combineReducers } from 'redux';

import book from './book';
import books from './books';
import viewer from './viewer';
import viewerSetting from './viewerSetting';

export default combineReducers({
  book,
  books,
  viewer,
  viewerSetting,
});
