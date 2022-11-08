const CHECK_BOOK_STATUS = 'CHECK_BOOK_STATUS';

const initialState = {
  books: [],
};

// Action creator
export const checkBookStatus = () => ({
  type: CHECK_BOOK_STATUS,
});

// Categories reducer
const categoriesReducer = (state = initialState, action) => {
  if (action.type === CHECK_BOOK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export default categoriesReducer;
