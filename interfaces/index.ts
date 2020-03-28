import { BooksState, EpubBookViewer } from './books';
import { ViewerState, ViewerSettingState } from './viewer';

export interface ReducerAction {
  type: string;
  payload: any;
}

export interface ReducerStates {
  books: BooksState;
  book: EpubBookViewer | null;
  viewer: ViewerState;
  viewerSetting: ViewerSettingState;
}
