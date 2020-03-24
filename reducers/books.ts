import { ReducerAction } from '../interfaces';
import { BooksState, BookInfo } from '../interfaces/books';

export const initialState: BooksState = {
  list: null,
};

// Action types
export const SET_BOOK_LIST = 'books/SET_BOOK_LIST';

// Action creators
export const setBookList = (list: BookInfo[]) => ({
  type: SET_BOOK_LIST,
  payload: {
    list,
  },
});

export default (state = initialState, action: ReducerAction): BooksState => {
  const { type, payload } = action;
  switch (type) {
    case SET_BOOK_LIST: {
      const { list } = payload;
      return {
        ...state,
        list: [...list],
      };
    }
    default: {
      return state;
    }
  }
};
