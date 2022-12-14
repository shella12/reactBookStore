import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    booksReducer: usersSlice,
    categoriesReducer,
  },
});

export default store;
