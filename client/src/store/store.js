import {configureStore} from '@reduxjs/toolkit';
import { combinedReducer } from './slices/combinedSlice';

export const store = configureStore({
  reducer: {combinedReducer}
});