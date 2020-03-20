import { BooksState } from './books';
import { ViewerState } from './viewer';

export interface ReducerAction {
  type: string;
  payload: any;
}

export interface ReducerState {
  books: BooksState;
  viewer: ViewerState;
}
