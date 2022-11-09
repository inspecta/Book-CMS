import { v4 as uuidv4 } from 'uuid';
import types from '../types/types';

// Initial state
const initialState = {
  books: [
    { id: uuidv4(), title: 'The Fugitive', author: 'Harrison Ford' },
    { id: uuidv4(), title: 'Game of Thrones', author: 'George Orwell' },
  ],
};

// Action creators
export const addBookToStore = (payload) => ({
  type: types.BOOK_ADDED,
  payload,
});

export const removeBookFromStore = (payload) => ({
  type: types.BOOK_REMOVED,
  payload,
});

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOK_ADDED:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case types.BOOK_REMOVED:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default booksReducer;
