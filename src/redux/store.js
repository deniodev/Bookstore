import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './book/booksSlice';
import categoryReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    books: BookReducer,
    category: categoryReducer,
  },
});

export default store;
