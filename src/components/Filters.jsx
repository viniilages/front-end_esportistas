// src/components/Filters.jsx
import React from 'react';
import Select from 'react-select';

const Filters = ({ cidades, esportes, onFilterChange }) => {
  return (
    <div>
      <Select
        options={cidades.map((cidade) => ({ value: cidade, label: cidade }))}
        onChange={(option) => onFilterChange('cidade', option.value)}
        placeholder="Selecione uma cidade"
      />
      <Select
        options={esportes.map((esporte) => ({ value: esporte, label: esporte }))}
        onChange={(option) => onFilterChange('esporte', option.value)}
        placeholder="Selecione um esporte"
      />
    </div>
  );
};

export default Filters;
