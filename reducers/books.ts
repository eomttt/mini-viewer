import { ReducerAction } from '../interfaces';
import { BooksState, BookInfo } from '../interfaces/books';

export const initialState: BooksState = {
  list: null,
  styles: [],
};

// Action types
export const SET_BOOK_LIST = 'books/SET_BOOK_LIST';
export const SET_BOOK_STYLES = 'books/SET_BOOK_STYLES';

// Action creators
export const setBookList = (list: BookInfo[]) => ({
  type: SET_BOOK_LIST,
  payload: {
    list,
  },
});

export const setBookStyles = (styles: string[]) => ({
  type: SET_BOOK_STYLES,
  payload: {
    styles,
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
    case SET_BOOK_STYLES: {
      const { styles } = payload;
      return {
        ...state,
        styles: [...styles],
      };
    }
    default: {
      return state;
    }
  }
};
