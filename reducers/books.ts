import { createAction, handleActions } from 'redux-actions';

import { ReducerAction } from '../interfaces';
import { BookListItem } from '../interfaces/books';

export const initialState: BookListItem[] = [];

// Action types
export const SET_BOOK_LIST = 'books/SET_BOOK_LIST';

// Action creators
export const setBookList = createAction(SET_BOOK_LIST,
  (bookList: BookListItem[]) => ([...bookList]));

// Reducer
export default handleActions({
  [SET_BOOK_LIST]: (_state, { payload }: ReducerAction) => ([
    ...payload,
  ]),
}, initialState);
