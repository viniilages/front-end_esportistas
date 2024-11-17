// src/pages/EsportistasPage.jsx
import React, { useEffect, useState } from 'react';
import { getEsportistas, deleteEsportista, getCidades, getEsportes } from '../api/api';
import EsportistasTable from '../components/EsportistasTable';
import Filters from '../components/Filters';
import EsportistaForm from '../components/EsportistasForm';

const EsportistasPage = () => {
  const [esportistas, setEsportistas] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [esportes, setEsportes] = useState([]);
  const [filters, setFilters] = useState({});
  
  useEffect(() => {
    fetchData();
    fetchFilters();
  }, []);

  const fetchData = async () => {
    const response = await getEsportistas(filters);
    setEsportistas(response.data);
  };

  const fetchFilters = async () => {
    const cidadesResponse = await getCidades();
    const esportesResponse = await getEsportes();
    setCidades(cidadesResponse.data);
    setEsportes(esportesResponse.data);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteEsportista(id);
    fetchData();
  };

  return (
    <div>
      <h1>Gestão de Esportistas</h1>
      <Filters cidades={cidades} esportes={esportes} onFilterChange={handleFilterChange} />
      <EsportistasTable data={esportistas} onDelete={handleDelete} />
    </div>
  );
};

export default EsportistasPage;
