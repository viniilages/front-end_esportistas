import { configureStore } from '@reduxjs/toolkit';
import esportistasReducer from '../features/esportistasSlice';
import filtrosReducer from '../features/filtrosSlice';

export const store = configureStore({
  reducer: {
    esportistas: esportistasReducer,
    filtros: filtrosReducer,
  },
});
