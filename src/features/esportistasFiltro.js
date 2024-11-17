import { createSlice } from '@reduxjs/toolkit';

const filtrosSlice = createSlice({
  name: 'filtros',
  initialState: { nome: '', cidade: '', esporte: '' },
  reducers: {
    setFiltro: (state, action) => {
      state[action.payload.filtro] = action.payload.valor;
    },
  },
});

export const { setFiltro } = filtrosSlice.actions;

export default filtrosSlice.reducer;
