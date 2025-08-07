import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../src/todoSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;