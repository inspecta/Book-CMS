import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vMf8GGdZ52DO8uftrnpR/books';

const initialState = {
  books: {},
  isLoading: true,
};

export const FetchBooksAsync = createAsyncThunk(
  types.FETCH_BOOKS,
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const AddBooks = createAsyncThunk(
  types.ADD_BOOKS_API,
  async (payload, thunkAPI) => {
    await axios.post(url, payload);
    return thunkAPI.dispatch(FetchBooksAsync());
  },
);

export const RemoveBooks = createAsyncThunk(
  types.REMOVE_BOOKS_API,
  async (payload, thunkAPI) => {
    await axios.delete(`${url}/${payload}`);
    return thunkAPI.dispatch(FetchBooksAsync());
  },
);

const FetchBooksSlice = createSlice({
  name: 'fetchBooks',
  initialState,
  reducers: {},
  extraReducers: {
    [FetchBooksAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [FetchBooksAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [FetchBooksAsync.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default FetchBooksSlice.reducer;
