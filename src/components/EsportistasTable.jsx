import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEsportistas, deleteEsportista } from '../features/esportistasSlice';

const EsportistasTable = () => {
  const dispatch = useDispatch();
  const esportistas = useSelector((state) => state.esportistas.data);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const esportistasPorPagina = 5;

  useEffect(() => {
    dispatch(fetchEsportistas());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEsportista(id));
  };

  const esportistasPaginados = esportistas.slice(
    (paginaAtual - 1) * esportistasPorPagina,
    paginaAtual * esportistasPorPagina
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Esporte</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {esportistasPaginados.map((e) => (
            <tr key={e.id}>
              <td>{e.nome}</td>
              <td>{e.cidade}</td>
              <td>{e.esporte}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPaginaAtual((p) => Math.max(p - 1, 1))}>Anterior</button>
      <button onClick={() => setPaginaAtual((p) => p + 1)}>Próximo</button>
    </>
  );
};

export default EsportistasTable;
