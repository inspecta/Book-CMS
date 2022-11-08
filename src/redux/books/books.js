const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

// Initial state
const initialState = {
  books: [],
};

// Action creators
export const addBookToStore = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

export const removeBookFromStore = (payload) => ({
  type: BOOK_REMOVED,
  payload,
});

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case BOOK_REMOVED:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload.id)],
      };

    default:
      return state;
  }
};

export default booksReducer;
