import React from 'react';
import EsportistasTable from '../components/EsportistasTable';
import EsportistaForm from '../components/EsportistasForm';

const Home = () => (
  <div>
    <h1>Gestão de Esportistas</h1>
    <EsportistaForm />
    <EsportistasTable />
  </div>
);

export default Home;
