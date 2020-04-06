import { combineReducers } from 'redux';

import book from './book';
import viewer from './viewer';
import viewerSetting from './viewerSetting';

export default combineReducers({
  book,
  viewer,
  viewerSetting,
});
