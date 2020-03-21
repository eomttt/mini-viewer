import { combineReducers } from 'redux';

import books from './books';
import viewer from './viewer';
import viewerSetting from './viewerSetting';

export default combineReducers({
  books,
  viewer,
  viewerSetting,
});
