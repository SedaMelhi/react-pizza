import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter, //хранилище, которе связывает меня с filter из файла filterSlice
  },
});
