import { BooksState } from './books';
import { ViewerState, ViewerSettingState } from './viewer';

export interface ReducerAction {
  type: string;
  payload: any;
}

export interface ReducerStates {
  books: BooksState;
  viewer: ViewerState;
  viewerSetting: ViewerSettingState;
}
