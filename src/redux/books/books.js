import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBooks, { deleteBooks, postBooks } from '../../APIs/apis';

const ADD_BOOK = 'react_book_store/books/ADD_BOOK';
const REMOVE_BOOK = 'react_book_store/books/REMOVE_BOOK';
const FETCH_BOOK = 'react_book_store/books/FETCH_BOOK';
const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchBooks = createAsyncThunk(FETCH_BOOK, async () => {
  const response = await getBooks();
  return response;
});
export const addBook = createAsyncThunk(ADD_BOOK, async (data) => {
  const response = await postBooks(data);
  return response;
});
export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const response = await deleteBooks(id);
  return response;
});
const usersSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      status: 'pending',
    })).addCase(fetchBooks.fulfilled, (state, action) => {
      const newBookList = Object.entries(action.payload).map((item) => ({
        id: item[0],
        title: item[1][0].title,
        author: item[1][0].author,
        category: item[1][0].category,
      }));
      return {
        ...state,
        status: 'success',
        books: newBookList,
      };
    }).addCase(addBook.fulfilled, (state) => ({
      ...state,
      status: 'idle',
    })).addCase(deleteBook.pending, (state) => ({
      ...state,
      status: 'idle',
    }))
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
        status: 'idle',
      }))
      .addCase(deleteBook.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        status: 'failed',
      }));
  },
});
export default usersSlice.reducer;
