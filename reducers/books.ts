import { createAction, handleActions } from 'redux-actions';

import { ReducerAction } from '../interfaces';
import { BooksState, BookListItem } from '../interfaces/books';

export const initialState: BooksState = {
  list: null,
};

// Action types
export const SET_BOOK_LIST = 'books/SET_BOOK_LIST';
export const ADD_BOOK = 'books/ADD_BOOK';

// Action creators
export const setBookList = createAction(SET_BOOK_LIST, (list: BookListItem[]) => ({ list }));
export const addBook = createAction(ADD_BOOK, (bookItem: BookListItem) => ({ item: bookItem }));
// export const setBookList = (list: BookListItem[]) => ({
//   type: SET_BOOK_LIST,
//   payload: {
//     list,
//   },
// });

// Reducer
export default handleActions({
  [SET_BOOK_LIST]: (state, { payload }: ReducerAction) => ({
    ...state,
    list: [...payload.list],
  }),
  [ADD_BOOK]: (state, { payload }: ReducerAction) => ({
    ...state,
    list: [...state.list, payload.item],
  }),
}, initialState);
// export default (state = initialState, action: ReducerAction): BooksState => {
//   const { type, payload } = action;
//   switch (type) {
//     case SET_BOOK_LIST: {
//       const { list } = payload;
//       return {
//         ...state,
//         list: [...list],
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
