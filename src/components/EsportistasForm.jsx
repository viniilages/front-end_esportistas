import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEsportista } from '../features/esportistasSlice';

const EsportistaForm = () => {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [esporte, setEsporte] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoEsportista = { id: Date.now(), nome, cidade, esporte };
    dispatch(addEsportista(novoEsportista));
    setNome('');
    setCidade('');
    setEsporte('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Esporte"
        value={esporte}
        onChange={(e) => setEsporte(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default EsportistaForm;
