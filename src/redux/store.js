import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import fetchBooksReducer from './features/BooksSlice';

const reducer = combineReducers({
  categories: categoriesReducer,
  fetchBooks: fetchBooksReducer,
});

const store = configureStore({
  reducer,
});

export default store;
