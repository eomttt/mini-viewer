import { BooksState } from './books';
import { ViewerCount, ViewerState } from './viewer';

export interface ReducerAction {
  type: string;
  payload: ViewerCount;
}

export interface ReducerState {
  books: BooksState;
  viewer: ViewerState;
}
