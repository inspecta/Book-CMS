import types from '../types/types';

const initialState = {
  categories: [],
};

// Action creator
export const checkBookStatus = () => ({
  type: types.CHECK_BOOK_STATUS,
});

// Categories reducer
const categoriesReducer = (state = initialState, action) => {
  if (action.type === types.CHECK_BOOK_STATUS) {
    return {
      ...state,
      categories: [...state.categories, 'Under Construction'],
    };
  }
  return state;
};

export default categoriesReducer;
