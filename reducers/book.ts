import { createAction, handleActions } from 'redux-actions';

import { ReducerAction } from '../interfaces';
import { EpubBookViewer } from '../interfaces/books';

export const initialState: EpubBookViewer | null = null;

// Action types
export const SET_SHOWING_BOOK = 'book/SET_SHOWING_BOOK';

// Action creators
export const setShowingBook = createAction(SET_SHOWING_BOOK, (book: EpubBookViewer) => ({ book }));
// export const setShowingBook = (book: EpubBookViewer) => ({
//   type: SET_SHOWING_BOOK,
//   payload: {
//     book,
//   },
// });

// Reducer
export default handleActions({
  [SET_SHOWING_BOOK]: (state, { payload }: ReducerAction) => ({
    ...payload.book,
  }),
}, initialState);
// export default (state = initialState, action: ReducerAction): EpubBookViewer | null => {
//   const { type, payload } = action;
//   switch (type) {
//     case SET_SHOWING_BOOK: {
//       const { book } = payload;
//       return {
//         ...book,
//       };
//     }
//     default: {
//       return {
//         ...state,
//       };
//     }
//   }
// };
