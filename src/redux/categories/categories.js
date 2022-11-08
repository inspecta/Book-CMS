import types from '../types/types';

const initialState = {
  books: [],
};

// Action creator
export const checkBookStatus = () => ({
  type: types.CHECK_BOOK_STATUS,
});

// Categories reducer
const categoriesReducer = (state = initialState, action) => {
  if (action.type === types.CHECK_BOOK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export default categoriesReducer;
