import { ReducerAction } from '../interfaces';
import { BooksState } from '../interfaces/books';

export const initialState: BooksState = {
  list: [],
};

export default (state = initialState, action: ReducerAction): BooksState => {
  const { type } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};
