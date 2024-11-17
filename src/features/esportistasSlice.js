import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchEsportistas = createAsyncThunk('esportistas/fetch', async () => {
  const response = await api.get('/esportistas');
  return response.data;
});

const esportistasSlice = createSlice({
  name: 'esportistas',
  initialState: { data: [], status: 'idle' },
  reducers: {
    addEsportista: (state, action) => {
      state.data.push(action.payload);
    },
    updateEsportista: (state, action) => {
      const index = state.data.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) state.data[index] = action.payload;
    },
    deleteEsportista: (state, action) => {
      state.data = state.data.filter((e) => e.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEsportistas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEsportistas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export const { addEsportista, updateEsportista, deleteEsportista } = esportistasSlice.actions;

export default esportistasSlice.reducer;
